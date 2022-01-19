from pyexpat import model
from sqlite3 import Date
from rest_framework import serializers
from django.db.models import fields
from .models import Comment, Photo

class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    comments = serializers.HyperlinkedRelatedField(
       view_name='comment_detail',
       many=True,
       read_only=True,
    )
    # likes = serializers.ModelSerializer(
    #     many=True,
    #     read_only=True,
    # )
    class Meta:
        model = Photo
        fields = (
            'id',
            'comments',
            'description',
            'photo',
            # 'likes',
            'date_created',
            "date_updated",
            # 'user',
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
            'text',
            'photo',
            
            # 'user',
        )