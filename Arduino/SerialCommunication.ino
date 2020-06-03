#include <Servo.h>

Servo servo;
const byte servoPin = 7;
const byte redPin = 13;
const byte greenPin = 11;
const byte bluePin = 9;

int index_pin, index_state;
int pin, state;
int index_servo, angle;


void setup()
{
  Serial.begin(9600); 
  pinMode(redPin,OUTPUT);
  pinMode(greenPin,OUTPUT);
  pinMode(bluePin,OUTPUT);
  
  servo.attach(servoPin); 
  servo.write(0);
  delay(1000);
}

void loop()
{  
  if(Serial.available()){
    String inString = Serial.readStringUntil('\n');    
    
    char ch = inString.charAt(0);
    
    switch(ch){
      case 'a':                 
                index_pin = inString.indexOf(',');     
                index_state = inString.length(); 
                pin = inString.substring(1, index_pin).toInt();     
                state = inString.substring(index_pin+1,index_state).toInt(); 
                LedOutput(pin,state);
                break;
      case 'b':
                index_servo = inString.length();   
                angle = inString.substring(1, index_servo).toInt();       
                ServoOutput(angle);
                break;                                
    }      
  } 
}

void LedOutput(int pin, int state){
  digitalWrite(pin, state);
}

void ServoOutput(int angle){
  servo.write(angle);  
} 


/*
  아두이노 보드에 시리얼 모니터를 통해서 신호를 전송하는 예제
  공부를 하면서 구현해본 실제 코드이지만
  프로젝트 사용 여부는 미정
*/
