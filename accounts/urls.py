from django.urls import path
from .views import CreateUserView

urlpatterns = [
    path("api/signup/", CreateUserView.as_view()),
    
     # path('signup/', views.UserAccounts.as_view(), name='UserAccounts'),
     
#      path('accounts/login/',
#          auth_views.LoginView.as_view(template_name='accounts/login.html'),
#          name='login'),
#      path('accounts/logout/',
#          auth_views.LogoutView.as_view(template_name='accounts/logout.html'),
#          name='logout'),
#      path('accounts/signup', views.sign_up, name="signup"),
] 