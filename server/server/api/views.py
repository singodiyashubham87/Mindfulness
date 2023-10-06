from rest_framework.decorators import api_view
from rest_framework import viewsets
from api.models import Questions
from api.serializers import QuestionsSerializes,UserDataSerializer, FeedbackSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.
class QuestionsViewSet(viewsets.ModelViewSet):
    queryset=Questions.objects.all()
    serializer_class=QuestionsSerializes

    # @action(detail=True,methods=['GET'])
    # def employees(self,request,pk=None):
    #     try:
    #         company = Company.objects.get(pk=pk)
    #         emps = Employee.objects.filter(company=company)
    #         emps_serializes = EmployeeSerializes(emps,many=True,context={'request':request})  
    #         return Response(emps_serializes.data)
    #     except Exception as e:
    #         print(e)
    #         return Response({'Message':"company is not found"})


@api_view(['GET','POST'])
def index(request):
    if request.method == 'GET':
        return Response({"message":"This is get request method"})
    else:
        return Response({'Message':'This is post request method'})



from rest_framework.views import APIView
from rest_framework import status
# from .serializers import UserDataSerializer  # Import your serializer

class UserCreateView(APIView):
    def post(self, request):
        # Deserialize the data using the serializer
        serializer = UserDataSerializer(data=request.data)

        if serializer.is_valid():
            # Print the data in the terminal
            validated_data = serializer.validated_data
            print("Received User Data:")
            print(f"Name: {validated_data['name']}")
            print(f"Email: {validated_data['email']}")
            print(f"Phone: {validated_data['phone']}")
            print(f"Age: {validated_data['age']}")

            # You can add code here to save the data to the database if needed

            return Response({"message": "User data received and processed"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FeedbackViewSet(APIView):
    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data

            print("Recevied User Feedback")
            print(f"Answer : {validated_data['q1']}")
            print(f"Answer : {validated_data['q2']}")
            print(f"Answer : {validated_data['q3']}")
            print(f"Answer : {validated_data['q4']}")
            print(f"Answer : {validated_data['q5']}")
            print(f"Answer : {validated_data['q6']}")
            print(f"Answer : {validated_data['q7']}")
            print(f"Answer : {validated_data['q8']}")
            print(f"Answer : {validated_data['q9']}")
            print(f"Answer : {validated_data['q10']}")

            return Response({"message":"User data received and processed"}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)