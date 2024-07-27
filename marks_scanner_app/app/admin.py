from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin



# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'fullName', 'is_active', 'is_staff')
    list_filter = ('is_active', 'is_staff')
    search_fields = ('email', 'fullName')
    ordering = ('email', 'fullName')

admin.site.register(CustomUser, CustomUserAdmin)