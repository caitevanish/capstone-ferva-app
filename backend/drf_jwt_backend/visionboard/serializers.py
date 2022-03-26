from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Visionboard

class VisionboardSerializer(serializers.ModelSerializer):
  class Meta:
    model= User
    fields= ['id','username']

class CourseSerializer(serializers.ModelSerializer):
  image = VisionboardSerializer(many = True, read_only= True)

  class Meta:
    model = Visionboard
    fields = ['id', 'title', 'url']