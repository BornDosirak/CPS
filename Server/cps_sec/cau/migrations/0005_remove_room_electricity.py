# Generated by Django 3.0.7 on 2020-06-09 07:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cau', '0004_room_electricity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='electricity',
        ),
    ]
