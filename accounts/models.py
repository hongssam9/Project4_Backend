from pyexpat import model
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class CustomUser(AbstractUser):
    username: models.CharField(max_length=50)
    email = models.EmailField(max_length=250),
    phone = models.CharField(max_length=12),
    gender = models.CharField(max_length=6), 
    birthday = models.DateField(),

    pass
