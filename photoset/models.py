from django.db import models
from django.utils import timezone
from django.core.validators import URLValidator, MaxValueValidator, MinValueValidator
from photoset.features.enums import Gridtype
import uuid

pic404_url = 'https://s.mxmcdn.net/images-storage/albums4/2/7/1/2/7/7/34772172_800_800.jpg'


class Photo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.CharField(max_length=500, blank=False, null=False, default=pic404_url, validators=[URLValidator()])
    description = models.CharField(max_length=500, blank=True, null=True)
    created_date = models.DateTimeField(default=timezone.now)


class Grid(models.Model):
    type = models.CharField(max_length=11, choices=[(tag, tag.value) for tag in Gridtype])
    width = models.IntegerField(default=0, validators=[MaxValueValidator(999), MinValueValidator(0)])
    gap = models.IntegerField(default=0, validators=[MaxValueValidator(999), MinValueValidator(0)])
