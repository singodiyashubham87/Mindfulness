from rest_framework import serializers 
from api.models import FeedbackModel

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackModel
        fields = '__all__'

