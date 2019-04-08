import unittest
import logging

logging.basicConfig()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Cirese_class_test(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        log.info("setUpClass cirese")

    @classmethod
    def tearDownClass(cls):
        log.info("testDown cirese")

    def test_cirese_test(self):

        self.assertTrue(True)


if __name__ == '__main__':
    unittest.main()
