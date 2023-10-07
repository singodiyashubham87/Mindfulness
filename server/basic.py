import requests

data = requests.post("http://127.0.0.1:8000/api/login/", json={'username':'holla','email':'holla2467@gmail.com','password':'tablet'})
print(data.json())