from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import userSerializer, assesmentSerializer
from api.models import userModel, AssessmentModel
from rest_framework.decorators import api_view


# {"data":{
#         "q0":18,"q1":"Business","q2":"Female",
#         "q3":3.30,"q4":5,"q5":0,"q6":"Average",
#         "q7":"Moderate","q8":"Average","q9":"Low",
#         "q10":"Married","q11":"Never","q12":"Occasionally",
#         "q13":"No","q14":"No","q15":5,"q16":"Moderate","q17":18,
#         "q18":"Off-Campus"}}

# Calculate and send scores to frontend. The data is to be recieved in the above format 
@api_view(['GET','POST'])
def userView(request):   
    if request.method == "GET":
        email = request.data['email']
        user_score_instance = AssessmentModel.objects.filter(user_id=email)
        serializer = assesmentSerializer(user_score_instance, many=True)
        return Response(serializer.data)

    if request.method == "POST":   # we dont need email here
        data = request.data['data']
        
        # Machine learning stuff
        user_input = [[]]
        for i in range(19):
            name = 'q'+str(i)
            user_input[0].append(data[name])      
        print(user_input)

        # load the files
        import pickle
        import pandas as pd

        pipeline_file = open('api\\ml_model\\mental_pipeline.pkl', 'rb')
        model_file = open('api\\ml_model\\mental_model.pkl', 'rb')
        print(1)

        try:
            pipeline = pickle.load(pipeline_file)   
            model = pickle.load(model_file)
            print(2)
        except Exception as e:
            print(f"An error occurred while loading the ML files: {e}")
            
        # Convert the user_input to dataframe using the columns
        column = ['Age','Course','Gender','CGPA','Stress_Level','Anxiety_Score','Sleep_Quality','Physical_Activity','Diet_Quality','Social_Support','Relationship_Status','Substance_Use','Counseling_Service_Use','Family_History','Chronic_Illness','Financial_Stress','Extracurricular_Involvement','Semester_Credit_Load','Residence_Type']
        input_vector = pd.DataFrame(user_input, columns=column)    
        
        score = float(model.predict(pipeline.transform(input_vector)))
        print(score)
    
        pipeline_file.close()
        model_file.close()
        print("done")
    return Response({"score":score})




# Does the user wants to save the score? Execute this view
# DATA FORMAT= {"user":"examplee@gmail.com", "score": 45}
@api_view(['POST'])
def saveResultView(request):
    if request.method == "POST":
        score = request.data['score']
        print(score)
        user = request.data['user']
        print(user)

        # If email exists already, the "if" block will execute, else the "else" block will execute
        serializer = assesmentSerializer(data={'user_id': user, 'score': score})
        if serializer.is_valid():
            user_instance = userModel.objects.get(email=user)
        else:
            user_instance = userModel.objects.create(email=user)

        # Save the new instance score where the email matches
        instance = AssessmentModel.objects.create(score = score, user_id=user_instance)
        instance.save() 
        
        return Response({"message": "Data saved successfully"})
            
    

# @api_view(['POST'])
# def accessmentView(request):
#     data = request.data
#     return Response({"message": "Got some data!", "data": request.data})
            


