"""
from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


# This functionality improves user id, but it's is not implemented
class ExtUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
"""
