from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from models import CustomUser
from rest_framework import generics
from Project4_backend.accounts.serializers import CustomUserSerializer

# Create your views here.
# class CustomUser(generics.RetrieveUpdateDestroyAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = CustomUserSerializer

def sign_up(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('nostaldja_list')
    else:
        form = UserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})