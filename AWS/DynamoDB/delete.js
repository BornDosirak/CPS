var AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-northeast-2",
  endpoint: "http://dynamodb.ap-northeast-2.amazonaws.com"
})

const tablename = process.argv[2]
const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: tablename
   };

dynamodb.deleteTable(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
})