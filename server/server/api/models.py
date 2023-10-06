from django.db import models

# Create your models here.

class Questions(models.Model):
    q1 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q2 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q3 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q4 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q5 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q6 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q7 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q8 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q9 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")
    q10 = models.CharField(max_length=15,choices=(('Not Good','Not Good'),('Good','Good'),('Excellent','Excellent')),default="Not Good")