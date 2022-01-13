from django.db import models

# Create your models here.
class Post(models.Model):
    username = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.TextField()

    def __str__(self):
        return self.name

class Comment(models.Model):
    username = models.CharField(max_length=100)
    comment =  models.TextField()
    name = models.ForeignKey(Post,on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.username