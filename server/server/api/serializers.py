from rest_framework import serializers 
from api.models import Questions

class QuestionsSerializes(serializers.HyperlinkedModelSerializer):
    # company_id = serializers.ReadOnlyField()
    class Meta:
        model=Questions
        fields="__all__"


class UserDataSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    age = serializers.IntegerField()


class FeedbackSerializer(serializers.Serializer):
    q1 = serializers.CharField(max_length=15,)
    q2 = serializers.CharField(max_length=15,)
    q3 = serializers.CharField(max_length=15,)
    q4 = serializers.CharField(max_length=15,)
    q5 = serializers.CharField(max_length=15,)
    q6 = serializers.CharField(max_length=15,)
    q7 = serializers.CharField(max_length=15,)
    q8 = serializers.CharField(max_length=15,)
    q9 = serializers.CharField(max_length=15,)
    q10 = serializers.CharField(max_length=15,)