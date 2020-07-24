# getir-case-study

## USAGE
A RESTful API is created with a single endpoint that fetches the data in the provided MongoDB collection and return the results.
It is  written in Node.js using express framework and MongoDb.
Users can send get request to 

## REQUIREMENTS
- Node.js
- express
- Postman
- MongoDb

## POSTMAN
- Install Postman to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/api/v1/posts
  - Method: GET
  - Body: raw + JSON (application/json)
  - Body Content: 
      ```
      { "startDate": "2016-01-26",
       "endDate": "2018-02-02",
       "minCount": 2700,
       "maxCount": 3000 }
      ```

