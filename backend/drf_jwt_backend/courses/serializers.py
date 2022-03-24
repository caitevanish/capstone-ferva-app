from rest_framework import serializers
from .models import Course
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model= User
    fields= ['id','username']

class CourseSerializer(serializers.ModelSerializer):
  user = UserSerializer(many = False, read_only= True)
  class Meta:
    model = Course
    fields = ['id', 'title', 'company', 'price', 'purchase_date', 'purchase_type', 'is_active', 'notes', 'user']
    # depth = 1