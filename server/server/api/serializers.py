from rest_framework import serializers 
from api.models import AssessmentModel
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentModel
        fields = ['username','datetime', 'score']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentModel
        fields = ['score',]