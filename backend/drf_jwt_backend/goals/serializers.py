from rest_framework import serializers
from .models import Goal
from courses.serializers import UserSerializer

#Need to update this with fixed table fields!

class GoalSerializer(serializers.ModelSerializer):
  user = UserSerializer(many = False, read_only= True)
  class Meta:
    model = Goal
    fields = ['id', 'title', 'description', 'has_project_list', 'has_course_list', 'has_deadline', 'deadline_date', 'notes', 'course_id', 'project_id', 'goal_type', 'start_date', 'user' ]