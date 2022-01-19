from datetime import date
from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from Social_django.settings import AUTH_USER_MODEL 




class Photo(models.Model):
    # user = models.ForeignKey( User, verbose_name="Created By", on_delete=models.CASCADE, related_name='photos')
    description = models.CharField(max_length=1000)
    photo = ProcessedImageField(upload_to="photos", format="JPEG", options={"quality": 80}, processors=[ResizeToFit(width=1000, height=1000)])
    # likes = models.ManyToManyField(AUTH_USER_MODEL, related_name='photo')
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.date_created

class Comment(models.Model):
    text = models.CharField(max_length=1000)
    photo = models.ForeignKey(Photo,on_delete=models.CASCADE, related_name='comments')
    # user = models.ForeignKey(User,on_delete=models.CASCADE, related_name='comments_user')
    

    # def __str__(self):
    #     return self.comment