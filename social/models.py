from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit


# Create your models here.
class Base(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    class Meta:
        """Metadata."""
        abstract= True

class User(Base, AbstractUser):
        """Custom User model"""


class Photo(Base):
    user = models.ForeignKey( User, verbose_name="Created By", on_delete=models.CASCADE, related_name='photos')
    description = models.TextField()
    photo = ProcessedImageField(upload_to="photos", format="JPEG", options={"quality": 80}, processors=[ResizeToFit(width=1000, height=1000)])

    def __str__(self):
        return self.name

class Comment(models.Model):
    username = models.CharField(max_length=100)
    comment =  models.TextField(max_length=1000)
    photo = models.ForeignKey(Photo,on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User,on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.user