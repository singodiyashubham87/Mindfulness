from django.db import models



class userModel(models.Model):
    email = models.EmailField(primary_key=True,max_length=30)
    

class AssessmentModel(models.Model):
    user_id = models.ForeignKey(userModel, on_delete=models.CASCADE)
    score = models.CharField(max_length=10)
    datetime = models.DateTimeField(auto_now=True)
