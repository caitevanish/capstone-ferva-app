from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Project
    fields = ['id', 'title', 'description', 'start_date', 'is_active', 'has_deadline', 'deadline_date', 'has_goal_id', 'has_milestones',  'notes', 'course_id', 'user_id']