
 void setup() {
  Serial.begin(115200);
  pinMode(7,INPUT);
}

void loop() {
  int val = digitalRead(7);
  
  if(val != 0){
  
    Serial.println("Closed");
  }
  else{
  
    Serial.println("Door Opened");
  }
  
  delay(1000);
}

/*
    문 개폐를 탐지하는 센서를 7번 핀으로 INPUT값을 받는다.
    문이 열린 것이 탐지된다면 val에 5v의 전류가 흐르게 되서 if문이 거짓이 되고 else구문이 실행된다.
    반대로 문이 닫혀있다고 탐지되면 if구문이 참이되어 시리얼 모니터에 Closed 가 출력된다.
    
    위의 코드는 영상으로 센서의 동작을 보여주기 위해 직접 작성하였다.
*/
