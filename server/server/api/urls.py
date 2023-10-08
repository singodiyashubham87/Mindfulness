from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api.views import FormView, ResultView

from .views import index

router = routers.DefaultRouter() 
# router.register(r'questions',QuestionsViewSet)

urlpatterns = [
    path('',index, name="home"),
    path('form/', FormView.as_view(), name='formview'),
    path('form/result/', ResultView.as_view(), name='resultview'),
    path('',include(router.urls))
]
    
