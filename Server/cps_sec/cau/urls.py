from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'index'),
    path('arduino', views.update, name = 'update'),
    path('getData', views.getData, name = 'getData'),
    path('B5.html/', views.Bfive, name = 'Bfive'),
    path('B6.html/', views.Bsix, name = 'Bsix'),
    path('3.html/', views.three, name = 'three'),
    path('4.html/', views.four, name = 'four'),
    path('5.html/', views.five, name = 'five'),
    path('6.html/', views.six, name = 'six'),
    path('7.html/', views.seven, name = 'seven'),
    path('8.html/', views.eight, name = 'eight'),
    path('9.html/', views.nine, name = 'nine'),
]

