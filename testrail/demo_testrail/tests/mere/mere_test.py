import unittest
import logging
import random

logging.basicConfig()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Mere_class_test(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        log.info("setUpClass mere")

    @classmethod
    def tearDownClass(cls):
        log.info("testDown mere")

    def test_mere_test(self):
		test_nr = random.randint(1,101)
        self.assertTrue(test_nr % 2 == 0, "Number was: {0}".format(test_nr))


if __name__ == '__main__':
    unittest.main()
