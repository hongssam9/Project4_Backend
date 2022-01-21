from datetime import date
from email.mime import image
from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from Social_django.settings import AUTH_USER_MODEL 




class Photo(models.Model):
    description = models.CharField(max_length=1000)
    image = ProcessedImageField(upload_to="photos", format="JPEG", options={"quality": 80}, processors=[ResizeToFit(width=1000, height=1000)])
    # likes = models.ManyToManyField(AUTH_USER_MODEL, related_name='photo')
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.date_created)

class Comment(models.Model):
    text = models.CharField(max_length=1000)
    photo = models.ForeignKey(Photo,on_delete=models.CASCADE, related_name='comments')
   
    

    def __str__(self):
        return self.text