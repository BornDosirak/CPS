# Generated by Django 3.0.7 on 2020-06-09 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cau', '0008_auto_20200609_2002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='room',
            field=models.IntegerField(default=0),
        ),
    ]