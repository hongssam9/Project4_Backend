from pyexpat import model
from sqlite3 import Date
from rest_framework import serializers
from django.db.models import fields
from .models import Comment, Photo




class CommentSerializer(serializers.ModelSerializer):
    # photo = serializers.HyperlinkedRelatedField(
    #    view_name='photo_detail',
    #    many=False,
    #    read_only=True,
    # )
    class Meta:
        model = Comment
        fields = (
            'id',
            'text',
            'photo',
        )
class CommentSerializerList(serializers.ModelSerializer):
    # photo = serializers.HyperlinkedRelatedField(
    #    view_name='photo_detail',
    #    many=False,
    #    read_only=True,
    # )
    # photo = serializers.ReadOnlyField(
    #     source = 'photo.id'
    # )
    text = serializers.ReadOnlyField()
    class Meta:
        model = Comment
        fields = (
            'id',
            'text',  
        )
class PhotoSerializer(serializers.ModelSerializer):
    comments = CommentSerializerList(
        many=True,
        read_only=True
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
            'image',
            # 'likes',
            'date_created',
            "date_updated",
        )