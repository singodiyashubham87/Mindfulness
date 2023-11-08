from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import userSerializer, assesmentSerializer
from api.models import userModel
from rest_framework.decorators import api_view


# Create your views here.
# either we use this or @api_view

# class ProfileView(ListAPIView):

#     def get_queryset(self):
#         return userModel.objects.all()

#     def get(self,request,):    
#         # user = userModel.objects.all()
#         serializer = userSerializer(self.get_queryset(),many=True)
#         print(serializer.data)
#         return Response(serializer.data,status=status.HTTP_200_OK)


@api_view(['GET','POST'])
def userView(request):
    if request.method == "GET":
        user = userModel.objects.all()
        serializer = userSerializer(user, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        data = request.data
        serializer = userSerializer(data=data)
        if serializer.is_valid():
            instance = userModel.objects.create(email = serializer.data['email'])
            instance.save()
            return Response({"message":"data is saved", "data":serializer.data})
        else:
            return Response({"message":"formate not match","data" : serializer.__format__})



@api_view(['POST'])
def accessmentView(request):
    data = request.data
    # call ml function
    return Response({"message": "Got some data!", "data": request.data})
            


