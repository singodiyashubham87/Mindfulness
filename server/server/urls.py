
from django.contrib import admin
from django.urls import path,include
import api

urlpatterns = [
    path('api/',include('api.urls')),
    path('admin/', admin.site.urls),
]
