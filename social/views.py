from django.shortcuts import render
from .models import Photo, Comment
from django.http import JsonResponse
from django.db.models.query import QuerySet
from .serializers import PhotoSerializer, CommentSerializer
from rest_framework import generics
# Create your views here.


class PhotoList(generics.ListCreateAPIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class PhotoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer    

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer  

# Why no work...
# seems to have an issue with the serializers or the views?
# je ne comprend pas parce que le computer est tres bete...