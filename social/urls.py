from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    # temp disabling this url to test react-integrations - Tad
    # path('', views.PhotoList.as_view(), name='photo_list'),
    path('photo/', views.PhotoList.as_view(), name='photo_list'),
    path('photo/<int:pk>', views.PhotoDetail,name='photo_detail'),
    path('comment/', views.CommentList.as_view(), name='comment_list'),
    path('comment/<int:pk>', views.CommentDetail.as_view(),name='comment_detail'),
    # Frontend render routes
    path('', TemplateView.as_view(template_name='index.html')),
    path('Settings', TemplateView.as_view(template_name='index.html')),
    path('Login', TemplateView.as_view(template_name='index.html')),
    path('SignUp', TemplateView.as_view(template_name='index.html')),
    path('Userprof', TemplateView.as_view(template_name='index.html')),
    path('Account', TemplateView.as_view(template_name='index.html')),
    path('Splash', TemplateView.as_view(template_name='index.html')),
    path('UploadImages', TemplateView.as_view(template_name='index.html')),
    path('Like', TemplateView.as_view(template_name='index.html')),
    path('Comment', TemplateView.as_view(template_name='index.html')),
    path('Messages', TemplateView.as_view(template_name='index.html')),
    path('PersonalInfo', TemplateView.as_view(template_name='index.html')),
    path('About', TemplateView.as_view(template_name='index.html')),
    path('ActivityHistory', TemplateView.as_view(template_name='index.html')),
    path('ForgotPass', TemplateView.as_view(template_name='index.html')),
    path('Terms', TemplateView.as_view(template_name='index.html')),
]