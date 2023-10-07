from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class FeedbackModel(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE,to_field='id',related_name='User_user_id')
    username = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    score = models.CharField(max_length=10)
    datetime = models.DateTimeField(auto_now=True)
