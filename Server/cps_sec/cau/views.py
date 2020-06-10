from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from django.template import loader
from .models import Room

def index(request):
    return render(request, 'cau/index.html')

def status(request, room_id):
    return HttpResponse("The room %s status" % room_id)

def Bfive(request):
    template = loader.get_template('cau/Bfive.html')
    return render(request, 'cau/Bfive.html')

def Bsix(request):
    template = loader.get_template('cau/Bsix.html')
    return render(request, 'cau/Bsix.html')    

def three(request):
    template = loader.get_template('cau/three.html')
    return render(request, 'cau/three.html')

def four(request):
    template = loader.get_template('cau/four.html')
    return render(request, 'cau/four.html')

def five(request):
    template = loader.get_template('cau/five.html')
    return render(request, 'cau/five.html')

def six(request):
    template = loader.get_template('cau/six.html')
    return render(request, 'cau/six.html')

def seven(request):
    template = loader.get_template('cau/seven.html')
    return render(request, 'cau/seven.html')

def eight(request):
    template = loader.get_template('cau/eight.html')
    return render(request, 'cau/eight.html')

def nine(request):
    template = loader.get_template('cau/nine.html')
    return render(request, 'cau/nine.html')

def update(request):
    room = request.GET.get("room")
    motion = request.GET.get('motion')
    door = request.GET.get('door')
    Elec = request.GET.get('elec')
    classroom = Room.objects.get(room =room)
    if motion : classroom.motion = motion
    if door : classroom.door = door
    if Elec : classroom.electricity = Elec
    classroom.status = int(motion) + int(door)
    classroom.save()

    return HttpResponse("room: ")

#http://127.0.0.1:8000/cau/arduino?room=301&motion=1&door=1

def getData(request):
    # floor = request.GET.get("floor")
    # data = Room.objects.filter(room__startswith = floor).exclude(status = 0)
    data = Room.objects.all().exclude(status = 0)
    json = {}

    for idx in range(len(data)):
        key = data[idx].room
        value = data[idx].status
        json[key] = value

    return JsonResponse(json)
