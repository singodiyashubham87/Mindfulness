from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api.views import FeedbackView

from .views import index

router = routers.DefaultRouter() 
# router.register(r'questions',QuestionsViewSet)

urlpatterns = [
    path('index/',index),
    path('feedback/',FeedbackView.as_view(), name="feedback"),
    path('',include(router.urls))
]
    
