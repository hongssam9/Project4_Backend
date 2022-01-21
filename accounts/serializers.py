from dataclasses import field
from rest_framework import serializers

from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        field = {
                "username",
                "email",
                "phone",
                "gender", 
                "birthday",
                }
       