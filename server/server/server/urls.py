from django.contrib import admin
from django.urls import path,include
from rest_framework.authtoken.views import obtain_auth_token




urlpatterns = [
    path('api/',include('api.urls')),
    # path('api/auth/', include('allauth.urls')),
    # path('api/auth/token/', obtain_auth_token, name='api-token-auth'),
   
    path('api/auth', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    
   
   
    
   
]
