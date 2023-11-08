from django.urls import path,include
from api.views import accessmentView, userView



urlpatterns = [
    # path('profile/', ProfileView.as_view(), name='profileview'),
    path('assessment/',accessmentView, name='assessment'),
    path('user/',userView, name='userview')

]
