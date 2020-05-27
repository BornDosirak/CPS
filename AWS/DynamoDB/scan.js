const AWS = require('aws-sdk');
AWS.config.update({
    region: "ap-northeast-2",
    endpoint: "http://dynamodb.ap-northeast-2.amazonaws.com"
})

const dynamodb = new AWS.DynamoDB();

var documentClient = new AWS.DynamoDB.DocumentClient();
const tablename = process.argv[2];
const params = {
    TableName : tablename
};

const listParams = {};
  
dynamodb.listTables(listParams, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});

documentClient.scan(params, (err,data) => {
    if(err) console.log(err);
    else console.log(data);
})