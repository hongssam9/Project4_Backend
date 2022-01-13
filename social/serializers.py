from pyexpat import model
from rest_framework import serializers
from django.db.models import fields
from .models import Comment, Photo, Base

class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    comments = serializers.HyperlinkedRelatedField(
       view_name='comment_detail',
       many=True,
       read_only=True,
    )
    class Meta:
        model = Photo
        fields = (
            'id',
            'comment'
            'description',
            'photo',
            'user',
        )

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    photo = serializers.HyperlinkedRelatedField(
       view_name='photo_detail',
       many=False,
       read_only=True,
    )
    class Meta:
        model = Comment
        fields = (
            'id',
            'username',
            'comment',
            'photo',
            'user',
        )