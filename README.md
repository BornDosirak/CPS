# 프로젝트명

### 미허가 침입 탐지 모델 구축



## 프로젝트 목적

- 건물 내 사용되지 않는 공간에 대한 정보를 수집하고, 이러한 정보와 센서를 활용하여 이상 상황을 탐지할 수 있는 모델 구축한다.

- 탐지한 이상 상황을 직관적으로 시각화하여 보안 인력에게 전달함으로써 보안 업무의 효율을 증대하고 신속한 대처를 가능하게 한다.

  



## 프로젝트 목표 및 수행 효과

- 중앙대학교 310관을 대상으로 파일럿 테스트를 진행한다.
- 사이버 물리 보안 시스템의 근간을 이루는 센서의 탐지 데이터를 자세하게 공부하고 실제로 활용해볼 수 있다.
- 실습 시간에 학습한 웹 크롤링과 파이썬에서 제공하는 기능들을 학습해 데이터를 정제해볼 수 있다.
- 기존의 물리 시스템에 모델링을 적용하여 보안 강화에 기여할 수 있다.



## 기본적인 프로젝트 동작 화면

#### 아두이노 모션 센서 구현 화면

​													 ![image-20200614231741216](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200614231741216.png)



#### 아두이노 Door 센서 구현 화면

![image-20200614231814881](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200614231814881.png)



#### **아두이노와 Localhost 통신 연결**

![image-20200614231829203](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200614231829203.png)



#### **중앙대학교 310관 5층 구현**

![__310_5](C:\Users\user\Desktop\쓰레기\__310_5.png)

​																				**(예시 503호**)

- **사용중인 강의실**

  ![green](C:\Users\user\Desktop\쓰레기\green.png)

  

- **1단계 경보 (motion or door)**

  ![orange](C:\Users\user\Desktop\쓰레기\orange.png)

  

- **2단계 경보 (motion and door)**

  ![red](C:\Users\user\Desktop\쓰레기\red.png)

  

- **비어있는 강의실**

  ![black](C:\Users\user\Desktop\쓰레기\black.png)

  

검정색의 강의실이 Door 센서를 떨어뜨리자 1단계 경보가 울리도록 바뀌는 장면

→ GIF 파일 추가



## 2조 팀원 

> **20165079 김영빈**<br>
> **20165545 조현우**<br>
> **20161569 최경식**



## 프로젝트에 사용한 툴

- **파이썬**

  - 데이터 크롤링 (BeautifulSoup)
  - 서버 구축 (Django)

- **Excel**

  - 크롤링 Data 정제

- **Github**

  - 코드 공유 및 버전 관리

- **AWS**

  - AWS Lambda 및 DynamoDB를 통한 서버 구현 및 DB 구성

- **NodeJS**

  - AWS Lambda 서버 환경 구현

- **Notion**

  - 프로젝트 결과물 정리
  - 링크는 마지막에 → 완성하고

- **Zoom**

  - 화면 공유, 원격 제어를 통한 Untact 팀플

- **HangOut**

  - 화상 전화를 이용한 Untact 팀플

    



## 구조

    /Arduino
    └── Motion_Door.ino // Arduino Code
    
    /Crawling
    ├── /Data
    │   └── ... // Json Data
    └── getTimeTable.py // Crawling Code    
    
    /AWS
    ├── /DynamoDB // CRUD function
    │   ├── delete.js
    │   ├── makeDB.js
    │   ├── scan.js
    │   └── update.js
    └── /Lambda 
        ├── node_modules // Basic modules
        │   └── ...
        ├── index.js // AWS Lambda function
        └── package-lock.json 
    
    /server
    ├── /cps_sec
    │   ├── /cps_sec
    │   │   └── ...
    │   ├── /cau
    │   │   ├── static // css & js
    │   │   ├── templates/cau // html
    │   │   ├── urls.py // Url routing
    │   │   ├── models.py
    │   │   ├── views.py // function
    │   │   └── ...
    │   ├── manage.py // app start
    │   └── ...
    └── /venv
    	└── ...



## Json Data 구성

    310관강의실.json - 310관 내 강의실로 사용되는 호실 데이터
      
    timeTables.csv	- 중앙대학교 모든 강의 시간표 csv 형식의 파일
      
    timeTable_subject_310관.csv - 310관에서 열리는 모든 강의 시간표 csv 형식의 파일
      
    강의시간표.json	- timeTables.csv convert to json
      
    강의시간표_정리.json - 강의시간표.json에서 쓸모없는 열을 제거한 데이터
      
    최종강의시간표.json - 강의시간표_정리.json 데이터에서 시간 형식으로 표현된 데이터를 정제한 데이터



## 버전 정보

### Server

| 사용 기술  | 버전(기기명) |
| :--------: | :----------: |
| **Python** |    3.8.1     |
| **Django** |    3.0.7     |
|  **pip**   |    20.1.1    |

### Arduino

|       사용 기술        | 버전(기기명) |
| :--------------------: | :----------: |
|    **Arduino IDE**     |    1.8.5     |
|       **Python**       |    2.7.13    |
| **Arduino WiFi board** | WeMos D1 R2  |


### AWS

|      사용 기술      | 버전(기기명) |
| :-----------------: | :----------: |
|     **Node.js**     |   12.16.1    |
|       **npm**       |    6.13.4    |
|     **moment**      |    2.24.0    |
| **moment-timezone** |    0.5.28    |

