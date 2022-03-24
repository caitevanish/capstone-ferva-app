from rest_framework import serializers
from .models import Project
from courses.serializers import UserSerializer

class ProjectSerializer(serializers.ModelSerializer):
  user = UserSerializer(many = False, read_only= True)
  
  class Meta:
    model = Project
    fields = ['id', 'title', 'description', 'start_date', 'is_active', 'has_deadline', 'deadline_date', 'has_goal_id', 'has_milestones',  'notes', 'course_id', 'user']