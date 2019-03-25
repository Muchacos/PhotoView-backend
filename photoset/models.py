from django.db import models
from django.utils import timezone
from django.core.validators import URLValidator, MaxValueValidator, MinValueValidator
from photoset.features.enums import Gridtype
import uuid

# Create your models here.
class Photo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.CharField(max_length=150, null=True, validators=[URLValidator()])
    description = models.TextField(max_length=400, null=True)
    created_date = models.DateTimeField(default=timezone.now)

class Grid(models.Model):
	type = models.CharField(max_length=11, choices=[(tag, tag.value) for tag in Gridtype])
	width = models.IntegerField(default=0, validators=[MaxValueValidator(999), MinValueValidator(0)])
	gap = models.IntegerField(default=0, validators=[MaxValueValidator(999), MinValueValidator(0)])
