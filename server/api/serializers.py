from rest_framework import serializers 
from api.models import userModel, AssessmentModel

# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AssessmentModel
#         fields = ['username','datetime', 'score']


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = userModel
        fields = '__all__'



class assesmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentModel
        fields = '__all__'