# Generated by Django 3.0.7 on 2020-06-09 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cau', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Floor',
        ),
        migrations.AddField(
            model_name='room',
            name='door',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='room',
            name='motion',
            field=models.BooleanField(default=False),
        ),
    ]
