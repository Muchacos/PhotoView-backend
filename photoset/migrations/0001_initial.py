# Generated by Django 2.1.7 on 2019-03-07 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.TextField(max_length=250)),
            ],
        ),
    ]
