from django.db import models
from django_db_views.db_view import DBView

class Room(models.Model):
    room = models.CharField(max_length = 4)
    motion = models.IntegerField(default = 0)
    door = models.IntegerField(default = 0)
    status = models.IntegerField(default = 0)
    
    def __str__(self):
        return str(self.room)

