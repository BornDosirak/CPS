const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-northeast-2",
    endpoint: "http://dynamodb.ap-northeast-2.amazonaws.com"
})

const dynamodb = new AWS.DynamoDB();


const params = {
    TableName: "TimeTable",
    KeySchema: [
        {AttributeName: "campus", KeyType: "HASH"}, //partition key
        {AttributeName: "sortType", KeyType: "RANGE"} //sort key
    ],
    AttributeDefinitions: [
        {AttributeName: "campus", AttributeType: "S"},
        {AttributeName: "sortType", AttributeType: "S"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
}

dynamodb.createTable(params).promise()
    .then(req => {
        console.log(req)
    })
    .catch(err => {
        console.log(err)
    })



