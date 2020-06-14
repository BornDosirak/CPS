# CPS
사이버 물리 시스템 보안 프로젝트

## 팀원 
> **20165079 김영빈**<br>
> **20165545 조현우**<br>
> **20161569 최경식**

## 사용 기술
### Server

> | 사용 기술 | 버전(기기명) |
> |:---:|:---:|
> | **Python** | 3.8.1 |
> | **Django** | 3.0.7 |
> | **pip** | 20.1.1 |
    
### Arduino

> | 사용 기술 | 버전(기기명) |
> |:---:|:---:|
> | **Arduino IDE** | 1.8.5 |
> | **Python** | 2.7.13 |
> | **Arduino WiFi board** | WeMos D1 R2 |

    
### AWS

> | 사용 기술 | 버전(기기명) |
> |:---:|:---:|
> | **Node.js** | 12.16.1 |
> | **npm** | 6.13.4 |
> | **moment** | 2.24.0 |
> | **moment-timezone** | 0.5.28 |

## AWS / DynamoDB
    makeDB.js - make new table

    delete.js - remove table

    scan.js - scan table

    update.js - update table's data
    
AWS DynamoDB를 Node.js를 통해 CRUD를 구현하는 코드

## Arduino
    ota.ino - ota 연결 코드

    test.ino - wifi 연결을 확인하는 코드
    
아두이노를 조작하는 코드

## Crawling/Data

    310관강의실.json - 310관 내 강의실로 사용되는 호실 데이터
  
    timeTables.csv	- 중앙대학교 모든 강의 시간표 csv 형식의 파일
  
    timeTable_subject_310관.csv - 310관에서 열리는 모든 강의 시간표 csv 형식의 파일
  
    강의시간표.json	- timeTables.csv convert to json
  
    강의시간표_정리.json - 강의시간표.json에서 쓸모없는 열을 제거한 데이터
  
    최종강의시간표.json - 강의시간표_정리.json 데이터에서 시간 형식으로 표현된 데이터를 정제한 데이터
    
DB에 올릴 데이터 정제
  
## Crawling
    getTimetable.py - 학교 포탈 강의시간표 데이터 크롤링 도구 => 년도, 학기, 검색타입, 건물명을 입력하면 해당 조건에 맞는 데이터를 크롤링 가능

강의 시간표 데이터 크롤링 코드
