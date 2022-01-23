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
    path('', TemplateView.as_view(template_name='index.html'))
]