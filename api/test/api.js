import superagent from "superagent";
import chai from "chai";

const expect = chai.expect;

describe('API Testing of Juice-shop', () => {
    let baseUrl = "http://localhost:3000/";
    it('Checking GET feedbacks', async()=>{
        const response = await superagent.get(baseUrl + 'api/Feedbacks/');
        console.log ("*****RESPONSE*****" + JSON.stringify(response));
        console.log ("*****RESPONSE STATUS CODE*****" + response.statusCode);
        expect(response.statusCode).to.equal(200);
    });

    it('Checking POST for user creation', async () =>{
        let requestBody = {"email": "testing5@gmail.com", "password": "qwerty", "passwordRepeat": "qwerty", "securityQuestion": {"id": 2, "question": "Mother's maiden name?", "createdAt": "2022-01-04T20:39:19.985Z"}, "securityAnswerControl": "qwerty"}
        const response = await superagent.post(baseUrl + 'api/Users/', requestBody);
        console.log ("*****RESPONSE*****" + JSON.stringify(response));
        console.log ("*****RESPONSE STATUS CODE*****" + response.statusCode);
        expect(response.statusCode).to.equal(201);
    });

    it('Checking POST for adding product', async () =>{
        let requestBody = {
            "ProductId": 1,
            "BasketId": "6",
            "quantity": 1,
          };
        const response = await superagent.post(baseUrl + 'api/BasketItems/').send(requestBody).set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjcsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0ZXN0aW5nNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImQ4NTc4ZWRmODQ1OGNlMDZmYmM1YmI3NmE1OGM1Y2E0Iiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjAuMC4wLjAiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0wMS0wNiAxMzoyOTowOC4wNzggKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMi0wMS0wNiAxMzoyOTowOC4wNzggKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjQxNDc1ODYwLCJleHAiOjE2NDE0OTM4NjB9.qiLcLHNjAlYWrVywg7AvJp8nCfl6Oa0GnNwpfLv7bspNtFmo4IfEnM12P2AL1TYJOumgjgUxMKqMMeHyygsQLlY_hIKEWezFqmSgC2f6lJqtAxtry9IeE_UekdSPl6kfljIsEepJofxTErZzi25VkGw1ISRoBWIAPxjPElLesvk" );
        console.log ("*****RESPONSE*****" + JSON.stringify(response));
        console.log ("*****RESPONSE STATUS CODE*****" + response.statusCode);
        expect(response.statusCode).to.equal(200);
    })
})

