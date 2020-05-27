# CPS
사이버 물리 시스템 보안 프로젝트

## AWS / DynamoDB
makeDB.js - make new table
delete.js - remove table
scan.js - scan table
update.js - update table's data

## Arduino
ota.ino - ota 연결 코드
test.ino - wifi 연결을 확인하는 코드

## Crawling
Data/
  310관강의실.json - 310관 내 강의실로 사용되는 호실 데이터 
  timeTables.csv	- 중앙대학교 모든 강의 시간표 csv 형식의 파일
  timeTable_subject_310관.csv - 310관에서 열리는 모든 강의 시간표 csv 형식의 파일
  강의시간표.json	- timeTables.csv convert to json
  강의시간표_정리.json	- 강의시간표.json에서 쓸모없는 열을 제거한 데이터
  최종강의시간표.json - 강의시간표_정리.json 데이터에서 시간 형식으로 표현된 데이터를 정제한 데이터
  
getTimetable.py - 학교 포탈 강의계획서 데이터 크롤링 도구 => 년도, 학기, 검색타입, 건물명을 입력하면 해당 조건에 맞는 데이터를 크롤링 가능

