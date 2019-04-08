import unittest
import logging

logging.basicConfig()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Pepene_class_test(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        log.info("setUpClass pepene")

    @classmethod
    def tearDownClass(cls):
        log.info("testDown pepene")

    def test_pepene_test(self):

        self.assertTrue(False)


if __name__ == '__main__':
    unittest.main()
