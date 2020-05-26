import requests
import csv
from bs4 import BeautifulSoup

class Scraper():
    def __init__(self):
        self.url = "https://campus.cau.ac.kr/servlet/UskLecPl10"
        self.filename = ""

    def setRequestBody(self, year, semester, searchType):
        if searchType == "subject":
            searchType = "sbjt"
        elif searchType == "professor":
            searchType = "prof"
        else :
            searchType = None
        
        #name = name.encode("euc-kr")

        formData = {
            "year" : year,
            "shtm" : semester,
            "choice" : searchType
        }
        return formData

    def getHTML(self, formData) :
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        res = requests.post(self.url, data = formData, headers = headers)

        if res.status_code != 200:
            print("Request Error :", res.status_code)

        html = res.text
        return BeautifulSoup(html, "html.parser")

    def getTimeTable(self, soup):
        timeTables = soup.select("table > tr")

        campus = []
        sbjtName = []
        major = []
        prof = []
        room_time = []

        for i in range(1, len(timeTables)):            
            data = timeTables[i].find_all("td")
            campus.append(data[0].text.strip())
            sbjtName.append(data[3].text.strip())
            major.append(data[4].text.strip())
            prof.append(data[6].text.strip())
            room_time.append(data[7].text.strip())
        
        self.writeCSV(campus, sbjtName, major, prof, room_time)
        
    def writeCSV(self, campus, sbjtName, major, prof, room_time) : 
        file = open(self.filename,"a", newline="")

        wr = csv.writer(file)
        for i in range(len(campus)) :
            wr.writerow([str(i + 1), campus[i], sbjtName[i], major[i], prof[i], room_time[i]])

        file.close()

    def scrap(self, year, semester, searchType):
        formData = self.setRequestBody(year, semester, searchType)
        soupPage = self.getHTML(formData)
        
        self.filename = "timeTable_" + searchType + "_" + name +".csv"
        file = open(self.filename, "w", newline="")
        wr = csv.writer(file)
        wr.writerow(["No.","캠퍼스", "과목명", "개설학과", "대표강사", "강의실 / 강의시간"])
        file.close()
        
        self.getTimeTable(soupPage)

     
if __name__ == "__main__" :
    year = input("몇 년도를 검색하시겠습니까?(20XX)")
    semester = input("몇 학기 시간표를 검색하시겠습니까?(1, 2)")
    searchType = input("검색 타입은 무엇으로 설정하시겠습니까? (subject, professor)")
    s = Scraper()
    s.scrap(year, semester, searchType)