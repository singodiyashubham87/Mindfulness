from django.contrib import admin
from django.urls import path,include
from rest_framework.authtoken.views import obtain_auth_token

from api.views import get_csrf_token, GitHubLogin 


urlpatterns = [
    path('api/',include('api.urls')),
    # path('api/auth/', include('allauth.urls')),
    # path('api/auth/token/', obtain_auth_token, name='api-token-auth'),
    path('get-csrf-token/',get_csrf_token, name='get_csrf_token'),
    path('api-auth/',include('rest_framework.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')), #
    path('api/auth/github/', GitHubLogin.as_view(), name='github_login'),
    path('admin/', admin.site.urls),
    
   
   
    
   
]
