import requests
import flask.templates.client

resp = requests.get('http://127.0.0.1:5000/api/swagger.json')
if resp.status_code != 200:
    # This means something went wrong.
    raise ApiError('GET /tasks/ {}'.format(resp.status_code))
for todo_item in resp.json():
    print(todo_item)