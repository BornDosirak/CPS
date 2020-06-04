
void setup()
{
  pinMode(7, INPUT);  
  Serial.begin(115200);
}

void loop()
{
  int value = digitalRead(7);
  if (value == 1){
  	Serial.println("detected");
  }
  else{
    Serial.println("undetected");
  }
  
  delay(1000);
}

/*
  모션 Detection Sensor에서 움직임이 감지될때 5v의 전력을 7번 포트로 전달하여 움직임을 최종적으로 감지하는 코드이다.
  움직임이 있다면 7번 포트를 통해 들어온 전력으로 디지털 신호를 읽게 되는데 그 신호가 인식 된다면 detected를 출력하고
  움직임이 인식되지 않는다면 undetected를 출력하는 코드이다.
  
  해당 코드는 예시 영상을 제작하기 위해서 직접 작성한 코드이다.
*/
