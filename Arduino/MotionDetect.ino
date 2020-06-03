void setup()
{
  pinMode(13, INPUT);
  pinMode(8, OUTPUT);
  
  Serial.begin(115200);
}

void loop()
{
  int value = digitalRead(13);
  Serial.println(value);
  
  delay(100);
}

/*
  13번 핀과 8번 핀을 이용한다.
  13번 핀에서 발생하는 전기 신호를 인지하여 value 값에 저장한 뒤에 시리얼 모니터에 출력하는 코드이다.
  움직임이 있으면 13번 포트에 5v 전류를 생성하여 값을 HIGH로 시리얼 모니터에 출력한다.
  움직임이 없는 경우에는 반대로 LOW값이 시리얼 모니터에 출력된다.
  
  해당 코드는 핀의 설계에 따라서 달라질 수 있다.
*/
