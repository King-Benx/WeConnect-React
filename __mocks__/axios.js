const axiosMock = jest.genMockFromModule('axios');
let mockResponse = {
    data:{
        results:{
            businesses: [
                {
                  "category": "Information Technology",
                  "created_by": "admin",
                  "date_created": "Tue, 10 Jul 2018 12:27:46 GMT",
                  "description": "business 1 description",
                  "id": 1,
                  "last_modified": "Tue, 10 Jul 2018 12:27:46 GMT",
                  "location": "Kampala",
                  "name": "business 1",
                  "user_id": 1
                },
                {
                    "category": "Information Technology",
                    "created_by": "admin",
                    "date_created": "Tue, 10 Jul 2018 12:27:46 GMT",
                    "description": "business 1 description",
                    "id": 1,
                    "last_modified": "Tue, 10 Jul 2018 12:27:46 GMT",
                    "location": "Kampala",
                    "name": "business 1",
                    "user_id": 1
                  },
            ]
        }
    }
}
axiosMock.get.mockImplementation(req);
function req(){
   return new Promise((resolve)=>{
       axiosMock.delayTimer = setTimeout(() => {
           resolve(mockResponse)
       }, 1000);
   })   
}
module.exports = axiosMock;