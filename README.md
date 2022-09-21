# Yammie-api

Instructions

I used MongoDB in this project
Therefor, if you want to send POST/GET request you need to put your URL in .env file to connect data base.

for run the server
'npm start'

for run the tests
'npm test'


operations

To send post request and save new order.

http://localhost:5000/api/order/saveOrder

body/json

{

    "username": "michael",
    "address": "test",
    "phoneNumber": "054610*****",
    "product":[],
    "note": "please bring ..."

}

To seng get request and get all order from today.

http://localhost:5000/api/order/getTodayOrder
