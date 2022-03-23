from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Course
    fields = ['id', 'title', 'company', 'price', 'purchase_date', 'purchase_type', 'is_active', 'notes', 'user_id']
    depth = 1