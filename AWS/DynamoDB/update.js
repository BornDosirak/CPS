var AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "ap-northeast-2",
  endpoint: "http://dynamodb.ap-northeast-2.amazonaws.com"
})

const docClient = new AWS.DynamoDB.DocumentClient();

const tableName = "TimeTable";

const data = fs.readFileSync('최종강의시간표.json');
const times = JSON.parse(data);

const en_date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const kor_date = ["일", "월", "화", "수", "목", "금", "토"]


for(let index in times.items){ // 갯수 조절 times == 시간표들
  let elem = times.items[index];  // elem == 하나의 시간

  //////// 이곳에 sorting 하는 방법 설정 ///////
  let lecture = elem.lecture.split('실> ');
  let site = lecture[0].split(' ')[0];
  let time = lecture[1];

  let item= time.split('/');

  const params = {
    TableName: tableName,
    Item: {
      campus : elem.campus,
      site : site,
      sortType : ""
    }
  };  


  for(let timeStr of item){ // timeStr == 월456
      timeStr = timeStr.trim();
      timeStr = timeStr.replace(/\(|\)/g,''); // "(", ")" 제거
      let date = en_date[kor_date.indexOf(timeStr[0])];

      params.Item[date] = [];
      if(timeStr.includes('~')){ // a~, b~
          params.Item.sortType = "time" + index; 
          params.Item[date].push(...timeStr.slice(1, -1).split(',')); 
      } else {
          params.Item.sortType = 'class' + index;
          params.Item[date].push(...timeStr.slice(1).split(',')); 
      }
  };

  docClient.put(params).promise()
  .then(req => {
    console.log(req);
  })
  .catch(err => {
    console.log(err);
  })
}

