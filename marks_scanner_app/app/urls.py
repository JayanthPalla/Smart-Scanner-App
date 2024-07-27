from django.urls import path, re_path
from django.views.generic import TemplateView
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('genex/', views.create_template),
    path('load_excel/', views.load_excel_data),
    path("user/register/", views.register_user, name='register_user'),
    path("user/login/", views.login_user, name='login_user'),
    path("user/details/", views.user_data, name='user_data'),
    path('user/check_authenticated/', views.check_login_status),
    
    # Catch-all URL pattern for React app
    re_path(r'^', TemplateView.as_view(template_name='index.html')),
]
