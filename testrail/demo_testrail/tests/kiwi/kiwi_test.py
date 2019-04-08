import unittest
import logging

logging.basicConfig()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Kiwi_class_test(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        log.info("setUpClass kiwi")

    @classmethod
    def tearDownClass(cls):
        log.info("testDown kiwi")

    def test_kiwi_test(self):

        self.assertTrue(True)


if __name__ == '__main__':
    unittest.main()
