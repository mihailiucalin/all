#!/usr/bin/env python
# -*- coding: utf-8 -*-
import getopt
import sys
import unittest
import os
import shutil
import copy_reg
import types
import datetime
from testrail_introd import *
from multiprocessing import Process
from xmlrunner import XMLTestRunner

from time import time


results_dir = r'/integration_test_results'
# python run_tests.py -o /home/mihailiu/practice/all/testrail/demo_testrail


def _pickle_method(m):
    # workaround for pickleing instance methods, required by multiprocess
    if m.im_self is None:
        return getattr, (m.im_class, m.im_func.func_name)
    else:
        return getattr, (m.im_self, m.im_func.func_name)


copy_reg.pickle(types.MethodType, _pickle_method)


def print_logs_to_stdout():
    if os.path.exists(results_dir):
        file_list = os.listdir(results_dir)
        if len(file_list) != 0:
            print '\n'
            print '##### Ordered logs start! #####'
            for log_file in file_list:
                island_name = log_file.split('-')[0]
                print '\n'
                print 50 * '#'
                print '#######  {0}  LOGS '.format(island_name)
                print '\n'
                reader = open('{0}/{1}'.format(results_dir, log_file))
                print reader.read()
                print 50 * '#'
                print '\n'


def make_results_dir(output_dir):
    try:
        print('Delete:' + output_dir + results_dir)
        shutil.rmtree(output_dir + results_dir)
    except Exception:
        pass
    finally:
        print('Create:' + output_dir + results_dir)
        os.mkdir(output_dir + results_dir)


def run_test_process(test_dir, f_pattern, output_dir):
    # test dir is expected as a relative path
    test_dir_name = test_dir.split('/')[len(test_dir.split('/')) - 1]
    sys.stdout = sys.stderr = open('{0}/{1}/{2}.log'.format(output_dir, results_dir, test_dir_name), 'w', buffering=0)
    print('**' * 10)
    print(test_dir)
    print(f_pattern)
    print(output_dir)
    print('**' * 10)
    discover_and_run_tests(test_dir, f_pattern, output_dir)


def discover_and_run_tests(test_dir, f_pattern, out_dir):

    loader = unittest.TestLoader()
    tests = loader.discover(
        start_dir=test_dir,
        pattern=f_pattern, top_level_dir='.')
    runner = XMLTestRunner(output=out_dir, stream=sys.stdout,
                           outsuffix=datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S-%f"))
    runner.run(tests)


def go_run(file_pattern, output_dir, test_cases):
    make_results_dir(output_dir)
    procs = []
    subdirs = os.listdir('./tests/')
    for subdir in subdirs:
        if os.path.isdir('./tests/{0}'.format(subdir)):
            if subdir not in test_cases:
                pass
            else:
                print('Run: ' + subdir)
                procs.append(Process(target=run_test_process,
                                     args=('./tests/{0}'.format(subdir), file_pattern, output_dir)))
    for proc in procs:
        proc.start()
    for proc in procs:
        proc.join()
    print_logs_to_stdout()
    os.system('rm *.xml')


def upload_results(tst_plan_name, output_dir):

    # Get logs
    testlogsFinder = CloudLensTestLogs(output_dir)
    testlogsFinder.find_tests()
    # Create Testrail object
    tst = Testrail()

    # Get Testcase ID and populate dict
    tcTitles = testlogsFinder.tcTitle_result_comment.keys()
    info_tstcases = tst.get_testcases_by_title(titles=tcTitles)
    for tcTitle in tcTitles:
        for info_tstcase in info_tstcases:
            if tcTitle == info_tstcase['title']:
                testlogsFinder.tcTitle_result_comment[tcTitle]['id'] = info_tstcase['id']
    # Upload results
    # Add test plan
    caseIDs = [x['id'] for x in info_tstcases]
    tst.add_test_plan(tst_plan_name)
    tst.update_test_plan(tst_plan_name, caseIDs)
    result_dict = {1: "Passed", 5: "Failed"}
    failed_tests = []
    for tcTitle in testlogsFinder.tcTitle_result_comment:
        comment = testlogsFinder.tcTitle_result_comment[tcTitle]['comment']
        result = testlogsFinder.tcTitle_result_comment[tcTitle]['status']
        tc_id = testlogsFinder.tcTitle_result_comment[tcTitle]['id']
        print("Test {0} {1}".format(tcTitle, result_dict[result]))
        if result != 1:
            failed_tests.append(tcTitle[:-5])
        tst.add_result_for_case(tc_id, result, comment)
    return failed_tests

def get_test_cases_from_testrail(section):
    tst = Testrail()
    section_dict ={"system": 1, "demo_testrail": 2}
    info_tstcases = tst.get_testcases_by_title()
    return [x for x in info_tstcases if x['section_id'] == section_dict[section] and not x['refs']]



def main(argv):
    test_cases = ['cirese', 'kiwi', 'mango', 'pere', 'pepene', 'mere']
    get_from_testrail = False
    rerun_failed = False

    opts, args = getopt.getopt(argv, "t:r", ["testrail=",
                                             "rerun="])
    for opt, arg in opts:
        if opt in ('-t', '--testrail'):
            print('here')
            get_from_testrail = True
        elif opt in ('-r', '--rerun'):
            print('there')
            rerun_failed = True

    output_dir = '/home/chelu/all/testrail/demo_testrail'
    file_pattern = '*test.py'    

    if get_from_testrail:
        info_tstcases = get_test_cases_from_testrail('demo_testrail')

    # Start
    go_run(file_pattern, output_dir, test_cases=test_cases)
    log_dir = output_dir + results_dir

    # Test Plan Name
    time_stamp = datetime.datetime.fromtimestamp(time()).strftime('%Y_%m_%d_%H_%M_%S')
    tst_plan_name = "TestRun_{0}".format(time_stamp)
    failed_tc = upload_results(tst_plan_name, log_dir)


    if rerun_failed:
        tst_plan_name = "Retry_" + tst_plan_name
        go_run(file_pattern, output_dir, test_cases=failed_tc)
        upload_results(tst_plan_name, log_dir)

if __name__ == '__main__':
    main(sys.argv[1:])
