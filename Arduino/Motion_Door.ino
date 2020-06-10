#include <ESP8266WiFi.h>

const char *ssid = "iptime";
const char *password = "";
const char* host = "192.168.0.68";

void setup() {
  pinMode(D5, INPUT);
  pinMode(D7, INPUT);
  Serial.begin(115200);
  delay(10);

  // Start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

int motion = 0;
int door = 0;
void loop() {
  delay(5000);
  door = 1 - digitalRead(D7);
  motion = digitalRead(D5);
  Serial.print("connecting to ");
  Serial.println(host);
  
  // Use WiFiClient class to create TCP connections
  WiFiClient client;
  const int httpPort = 8000;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    return;
  }
  
  String url = "/cau/arduino";
  
  Serial.print("Requesting URL: ");
  Serial.println(url);
  
  // This will send the request to the server
  client.print(String("GET ") + url + "?room=721&motion=" + motion + "&door=" + door + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
               
  int timeout = millis() + 5000;
  while (client.available() == 0) {
    if (timeout - millis() < 0) {
      Serial.println(">>> Client Timeout !");
      client.stop();
      return;
    }
  }

  if(door == 1){
    Serial.print("Door Opened!!\n\n");
  } else {
    Serial.print("Door Closed!!\n\n");
  }
   if(motion == 1){
    Serial.print("Motion Detected!!\n\n");
  } else {
    Serial.print("Motion not Detected!!\n\n");
  }
  
  Serial.println();
  Serial.println("closing connection");
}
