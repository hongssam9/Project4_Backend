from atexit import register
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models 
# Register your models here.
admin.site.register(models.Photo)
admin.site.register(models.Comment)



# @admin.register(models.Photo)
# class PhotoAdmin(admin.ModelAdmin)
    

# @admin.register(models.Comment)
# # class CommentAdmin(admin.ModelAdmin):
# #     """Admin for comment."""

# @admin.register(models.User)
# class CustomUserAdmin(UserAdmin)
   