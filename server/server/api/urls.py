from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api.views import QuestionsViewSet
from .views import index, UserCreateView,FeedbackViewSet

router = routers.DefaultRouter() 
router.register(r'questions',QuestionsViewSet)

urlpatterns = [
    path('index/',index),
    path('create-user/', UserCreateView.as_view(), name='create-user'),
    path('feedback/',FeedbackViewSet.as_view(), name="feedback"),
    path('',include(router.urls))
]
    
