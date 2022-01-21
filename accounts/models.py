from pyexpat import model
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class CustomUser(AbstractUser):
    phone = models.CharField(max_length=12),
    gender = models.CharField(max_length=200), 
    birthday = models.DateField(),

