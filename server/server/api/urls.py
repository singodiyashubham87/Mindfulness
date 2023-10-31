from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api.views import CalculateResultFromFormView, ResultSaveView, ProfileView

from .views import index

router = routers.DefaultRouter() 
# router.register(r'questions',QuestionsViewSet)

urlpatterns = [
    path('',index, name="home"),
    path('profile/', ProfileView.as_view(), name='profileview'),
    path('form/result/', CalculateResultFromFormView.as_view(), name='formview'),
    path('form/save/', ResultSaveView.as_view(), name='resultview'),
    path('',include(router.urls))
]
    
