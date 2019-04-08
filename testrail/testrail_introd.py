from testrail import *
from time import time
import datetime
import os
import re
import sys


class Testrail():

    def __init__(self, user='alin.mihailiuc@keysight.com', password='Ixia123!@#'):
        self.client = APIClient('https://alinixia.testrail.io/')
        self.client.user = user
        self.client.password = password
        self.suite_id = 1
        self.project_id = 1
        self.idRun = None
        self.idPlan = None

    def add_test_plan(self, name):

        self.idPlan = self.client.send_post("add_plan/" + str(self.project_id),
                                            {"name": name, })['id']

    def update_test_plan(self, testRunName, testCases, idPlan=None):
        """
        Update testplan with testrun
        """
        if not idPlan:
            idPlan = self.idPlan
        idRun = self.client.send_post("add_plan_entry/" + str(idPlan),
                                      {"suite_id": self.suite_id,
                                       "name": testRunName,
                                       "include_all": False,
                                       "case_ids": testCases
                                       })
        self.idRun = idRun['runs'][0]['id']
        return idRun['runs'][0]['id']

    def add_result_for_case(self, case_id, status, comment, idRun=None):
        """
        Adds results to specified caseIDs
        """
        if not idRun:
            idRun = self.idRun
        self.client.send_post('add_result_for_case/' + str(idRun) + '/' + str(case_id),
                              {'status_id': status,
                               'comment': comment})

    def get_testcase(self, testcase):
        """
        :param testcase: testcase that should be queried in Testrail
        :return: info about testcase
        """
        testcase_info = self.client.send_get('get_case/' + str(testcase))
        return testcase_info

    def get_testcases_by_title(self, titles=[]):
        """
        Get TestCases from TestRail
        """
        testcases = self.client.send_get("get_cases/{0}&suite_id={0}".format(self.project_id, self.suite_id))
        return [x for x in testcases if x['title'] in titles]


class CloudLensTestLogs():

    def __init__(self, directory):
        self.directory_logs = directory
        self.tcTitle_result_comment = {}

    def find_tests(self):
        skipped_regex = 'Ran 0 tests in 0.000s'
        pass_regex = 'OK\n\nGenerating XML reports...'
        fail_regex = 'FAILED.*\n\nGenerating XML reports...'
        for fname in os.listdir(self.directory_logs):    # change directory as needed
            with open(os.path.join(self.directory_logs, fname)) as f:   # open file
                results_from_fname = f.read()
                print("Found log: {0}".format(fname))
                if re.search(skipped_regex, results_from_fname):
                    pass
                elif re.search(pass_regex, results_from_fname):
                    tcTitle = fname.split('.')[0] + '_test'
                    self.tcTitle_result_comment[tcTitle] = {'status': 1,
                                                            'comment': results_from_fname}
                elif re.search(fail_regex, results_from_fname):
                    tcTitle = fname.split('.')[0] + '_test'
                    self.tcTitle_result_comment[tcTitle] = {'status': 5,
                                                            'comment': results_from_fname}


directory = sys.argv[1]
jkbuild = sys.argv[2]
buildNo = 'build_no#{0}'.format(sys.argv[3])
testlogsFinder = CloudLensTestLogs(directory)
testlogsFinder.find_tests()

# Create Testrail object
tst = Testrail()

# Create name for TestPlan
time_stamp = datetime.datetime.fromtimestamp(time()).strftime('%Y_%m_%d_%H_%M_%S')
tst_plan_name = "TestRun_{0}_{1}_{2}".format(jkbuild, buildNo, time_stamp)

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
result_dict = {1: "Passed", 2: "Failed"}
for tcTitle in testlogsFinder.tcTitle_result_comment:
    comment = testlogsFinder.tcTitle_result_comment[tcTitle]['comment']
    result = testlogsFinder.tcTitle_result_comment[tcTitle]['status']
    tc_id = testlogsFinder.tcTitle_result_comment[tcTitle]['id']
    print("Test {0} {1}".format(tcTitle, result_dict[result]))
    tst.add_result_for_case(tc_id, result, comment)
