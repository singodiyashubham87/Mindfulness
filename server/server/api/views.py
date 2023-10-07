from rest_framework.decorators import api_view
from rest_framework import viewsets
from api.models import FeedbackModel
from rest_framework.decorators import action
from rest_framework.response import Response
from api.serializers import FeedbackSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import ListAPIView


@api_view(['GET','POST'])
def index(request):
    if request.method == 'GET':
        return Response({"message":"This is get request method"})
    else:
        return Response({'Message':'This is post request method'})


class FeedbackView(ListAPIView):
    queryset = FeedbackModel.objects.all()
    serializer_class = FeedbackSerializer


