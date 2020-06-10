function floorChange(floor) {location.href=`http://localhost:8000/cau/${floor}.html`}
        
// fetch를 통해 데이터를 전송하려면 JSON.stringify를 해줘야한다.

const floor = document.getElementsByTagName("title")[0].id

window.onload = getFloorData(floor) // 서버로 데이터 가져오는 부분


function getFloorData(floor){
    const data = {
        "action": {
            "params": {
                "floor": `${floor}`
            }
        }
    }

    fetch(`http://localhost:8000/cau/getData?floor=${floor}`)
    .then(function(response){
        response.json()
        .then(json => {
            for(let room in json) {
                sessionStorage.setItem(room, json[room])
                let element = document.getElementById('btn' + room.substring(0, room.length - 2))
                element.style.borderColor = 'red'
            }
        })
    })

    fetch("https://hek6dzjtxj.execute-api.ap-northeast-2.amazonaws.com/default/hello", {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => {
        if(res.status === 200 || res.status === 201){
            res.json()
            .then(json => {
                const rooms = json.sites.split(", ");
                rooms.forEach(el => {
                    console.log(el.substring(0, el.length - 1))
                    let element = document.getElementById(el.substring(0, el.length - 1))
                    if(sessionStorage.getItem(element.id) == 2)
                        element.style.borderColor = "red"
                    else if(sessionStorage.getItem(element.id) == 1)
                        element.style.borderColor = "orange"
                    else
                        element.style.borderColor = "black"
                    element.setAttribute("value", "empty")
                })

                console.log(json)
            })
        }
    }).catch(err => console.error(err))

    
}

const rooms = document.querySelectorAll('.place')

for(let room of rooms){
    room.addEventListener('click', event => {
        const target = event.target; 
        if(sessionStorage.getItem(target.id)){
            target.style.borderColor = "black"
            sessionStorage.removeItem(target.id)
        }
    })
}

// 10초마다 페이지 리로드 
// Init = setInterval(() => {
//     location.reload()
// }, 10000)


