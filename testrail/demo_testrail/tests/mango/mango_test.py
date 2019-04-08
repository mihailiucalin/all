import unittest
import logging

logging.basicConfig()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Mango_class_test(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        log.info("setUpClass mango")

    @classmethod
    def tearDownClass(cls):
        log.info("testDown mango")

    def test_mango_test(self):

        self.assertTrue(True)


if __name__ == '__main__':
    unittest.main()
