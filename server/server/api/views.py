from rest_framework.decorators import api_view
from rest_framework import permissions

from rest_framework.decorators import action
from rest_framework.response import Response
from api.models import AssessmentModel
from django.contrib.auth.models import User
from api.serializers import ResultSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import ListAPIView


@api_view(['GET','POST'])
def index(request):
    if request.method == 'GET':
        return Response({"message":"This is get request method"})
    else:
        return Response({'Message':'This is post request method'})


# when user clicks on the profile page, he will be shown his basic info
# and his scores till now.
class ProfileView(ListAPIView):
    def get(self,request, *args, **kwargs):
        pass
        # serializers used: profile, user
        # return username, email from User
        # return date, score from cuurent user from model assesment


# After the assessment, user will be redirected to result page, if user wants to save the score, he must be authenticated
# If he is authenticated, we save their scores.
class ResultView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self,request, *args, **kwargs):
        if self.request.user.is_authenticated:
            data = request.data
            serializer = ResultSerializer(data=data)
            if serializer.is_valid():
                user = request.user
                user_id = User.objects.get(username=user)
                instance = AssessmentModel.objects.create(score = serializer.validated_data['score'], user_id=user_id,username=user)
                instance.save()            
                return Response(status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
           

# Takes the assessment answers as argument and feed them into ML model, and returns the predicted score
class FormView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request, *args, **kwargs):
        try:
            ans1 = request.data['q1']
            ans2 = request.data['q2']
            # check if they are in good format, feed into ml model
            # as we don't have ML MODEL, let's say we performed concatenation
            score = ans1+ans2
            print("done")
            return Response({"score":score}, status=status.HTTP_202_ACCEPTED)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
        