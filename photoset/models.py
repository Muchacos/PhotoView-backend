from django.db import models

# Create your models here.
class Photo(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.TextField(max_length=250)
