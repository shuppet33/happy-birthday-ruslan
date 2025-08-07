import json
import requests

data = {'code':'print(2+4)', 'func_name':'sum','args':[1,2]}
json_data = json.dumps(data)
print(json_data)
try:
    response = requests.post('http://195.166.166.82:8000/check', data=json_data, headers={'content-type':'application/json'})
# print(json.loads(response.content))
    print(response.json())
except:
    print("Удалённый сервер не отвечает")