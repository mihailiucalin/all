import unittest
import logging

logging.basicConfig()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Pere_class_test(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        log.info("Hello: pere!")

    @classmethod
    def tearDownClass(cls):
        log.info("Bye pere!")

    def test_pere_test(self):
        self.assertTrue(False)


if __name__ == '__main__':
    unittest.main()
