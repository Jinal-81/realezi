from django.urls import path
from . import views
from .views import property_list

urlpatterns = [
    path('', views.index, name="index"),
    path('properties/', property_list, name='property_list'),

]