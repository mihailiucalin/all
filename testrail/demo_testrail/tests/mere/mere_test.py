import unittest
import logging

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

        self.assertTrue(True)


if __name__ == '__main__':
    unittest.main()
