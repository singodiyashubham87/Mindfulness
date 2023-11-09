import pickle
import pandas as pd

# open the files
pipeline_file = open('mental_pipeline.pkl', 'rb')
pipeline = pickle.load(pipeline_file)
model_file = open('mental_model.pkl', 'rb')
model = pickle.load(model_file)

# user input we got from frontend
user_input = [[18,'Business','Female',3.30,5, 0,'Average','Moderate','Average','Low','Married','Never','Occasionally','No','No',5,'Moderate',18,'Off-Campus']]
column = 	['Age','Course','Gender','CGPA','Stress_Level','Anxiety_Score','Sleep_Quality','Physical_Activity','Diet_Quality','Social_Support','Relationship_Status','Substance_Use','Counseling_Service_Use','Family_History','Chronic_Illness','Financial_Stress','Extracurricular_Involvement','Semester_Credit_Load','Residence_Type']

# Convert the user_input to dataframe
input_vector = pd.DataFrame(user_input, columns=column)


# predict
score = model.predict(pipeline.transform(input_vector))
print(score)