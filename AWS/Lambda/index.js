const AWS = require('aws-sdk');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const en_date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const timeList = [
        {"start":"9:00","end":"10:30"},
        {"start":"10:30","end":"12:00"},
        {"start":"12:00","end":"13:30"},
        {"start":"13:30","end":"15:00"},
        {"start":"15:00","end":"16:30"},
        {"start":"16:30","end":"18:00"},
        {"start":"18:00","end":"19:30"},
        {"start":"19:30","end":"21:00"},
        {"start":"21:00","end":"22:30"}
    ]

exports.handler = (event, context, callback) => {
    var docClient = new AWS.DynamoDB.DocumentClient();

    const day = moment().day(); // 오늘 요일 구하기
    const time = moment().format('HH:mm'); // 현재 시간 구하기

    const date = en_date[day];
    

    const event_body = JSON.parse(event.body);
    const params = event_body.action.params;
    const floor = params.floor
    
    const building = "310관"
    const classNum = (Number(moment().format('HH')) - 8).toString(); // 이걸로 교시 구현 완료
    const alpIndex = timeList.filter((el, i) => { // 이걸로 시간 구현 완료
        return el.start <= time && time < el.end
            
    })
    const classAlp = String.fromCharCode(timeList.indexOf(alpIndex[0]) + 97);

    const classParams = {
        TableName : "TimeTable",
        KeyConditionExpression: "campus = :campus and begins_with(sortType, :type)",
        ExpressionAttributeValues : {
            ":campus" : building,
            ":type" : "class",
            ":class" : classNum,
            ":floor" : floor
        
        },
        FilterExpression : `contains(${date}, :class) and begins_with(site, :floor)`
    }
    const timeParams = {
        TableName : "TimeTable",
        KeyConditionExpression: "campus = :campus and begins_with(sortType, :type)",
        ExpressionAttributeValues : {
            ":campus" : building,
            ":type" : "time",
            ":class" : classAlp,
            ":floor" : floor
        },
        FilterExpression : `contains(${date}, :class) and begins_with(site, :floor)`
    }
    const siteParams = {
        TableName : "Rooms",
        KeyConditionExpression: "campus = :campus and begins_with(rname, :name)",
        ExpressionAttributeValues : {
            ":campus" : building,
            ":name" : "강의실", 
            ":floor" : floor
        },
        FilterExpression : "begins_with(site, :floor)"
    }

    const query = (params) => docClient.query(params).promise();
    
    Promise.all([query(siteParams), query(classParams), query(timeParams)])
    .then(datas => {
        const sites = [];
        datas.shift().Items.forEach(el => sites.push(el.site));
        datas.forEach(data => {
            data.Items.forEach(el => {
                sites.splice(sites.indexOf(el.site), 1)
            }) 
        })
         if(sites.length){    
            callback(null,  {
                statusCode: 201,
                headers : {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    sites: sites.join(', ')
                })
            });
        } else {
            callback(null,  {
                statusCode: 201,
                headers : {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    sites: "검색한 층에는 비어있는 강의실이 없어요."
                })
            });
        }
        
    })
    .catch(err => callback(null, {
        statusCode:504,
        headers : {
                    'Access-Control-Allow-Origin': '*'
                },
        body:JSON.stringify(err)
    }))
}
