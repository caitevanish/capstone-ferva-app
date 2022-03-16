from rest_framework import serializers
from .models import Goal

#Need to update this with fixed table fields!

class GoalSerializer(serializers.ModelSerializer):

  class Meta:
    model = Goal
    fields = ['id', 'title', 'description', 'has_project_list', 'has_course_list', 'has_deadline', 'deadline_date', 'notes', 'course_id', 'project_id', 'goal_type',]