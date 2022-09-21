# Yammie-api

**Instruction**

I used MongoDB in this project<br />
Therefor, if you want to send POST/GET request you need to put your URL in .env file to connect data base.

for run the server<br />
```npm start```

for run the tests<br />
```npm test```<br /><br />

**operations**

To send post request and save new order.<br />
http://localhost:5000/api/order/saveOrder<br />

body/json<br />
```
{
    "username": "michael",
    "address": "test",
    "phoneNumber": "054610*****",
    "product":[],
    "note": "please bring ..."
}
```

To seng get request and get all order from today.<br />
http://localhost:5000/api/order/getTodayOrder
