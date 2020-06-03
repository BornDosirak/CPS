void setup(){

  Serial.begin(115200);
  pinMode(pushButton, INPUT);
}

void loop(){
  
  int buttonState = digitalRead(pushButton);
  
  Serial.println(buttonState);
  delay(500);
 
}
 
/*
  
  포트로 들어오는 전류 신호가 HIGH인지 LOW인지를 판단한다.

*/
