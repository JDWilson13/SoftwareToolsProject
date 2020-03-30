import requests
url = "https://api.infermedica.com/v2/diagnosis"
payload = {"sex": "male", "age": 30, "evidence": [
    {
        "id": "s_1193",
        "choice_id": "present",
        "initial": True
    },
    {
        "id": "s_488",
        "choice_id": "present"
    },
    {
        "id": "s_418",
        "choice_id": "present"
    }
]
}
headers = {"App-Id": "bb7f8163", "App-Key": "secret",
           "Content-Type": "application/json"}
res = requests.post(url, json=payload, headers=headers)
print(res.text)
