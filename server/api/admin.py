from django.contrib import admin
from api.models import userModel,AssessmentModel

# Register your models here.

admin.site.register(userModel)
admin.site.register(AssessmentModel)