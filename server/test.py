import json
import requests

data = {'code':'print(2+4)', 'func_name':'sum','args':[1,2]}
json_data = json.dumps(data)
print(json_data)
response = requests.post('http://127.0.0.1:8080/check', data=json_data, headers={'content-type':'application/json'})
print(json.loads(response.content))
