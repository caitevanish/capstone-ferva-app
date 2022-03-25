from rest_framework import serializers

from courses.models import Course

from .models import Project, Milestone, ProjectTimetable
from django.contrib.auth.models import User
from courses.serializers import UserSerializer, CourseSerializer
# from courses.serializers import UserSerializer

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model= User
    fields= ['id','username']

# class CourseSerializer(serializers.ModelSerializer):
#   class Meta:
#     model= Course
#     fields=['id', 'title']

class ProjectSerializer(serializers.ModelSerializer):
  user = UserSerializer(many = False, read_only= True)
  courses = serializers.SerializerMethodField()
  
  class Meta:
    model = Project
    fields = ['id', 'title', 'description', 'start_date', 'is_active', 'has_deadline', 'deadline_date', 'has_goal_id', 'has_milestones', 'notes', 'courses', 'user']
    depth = 1
  def get_courses(self, response):
    courses = Course.objects.filter(user_id= response.user.id)
    return CourseSerializer(courses, many=True).data

    # courses = serializers.SerializerMethodField


class MilestoneSerializer(serializers.ModelSerializer):
  user = UserSerializer(many = False, read_only= True)
  project = ProjectSerializer(many = False, read_only= True)
  
  class Meta:
    model = Milestone
    fields = ['id', 'title', 'is_active', 'user', 'project']
    # depth = 1
    

class ProjectTimetableSerializer(serializers.ModelSerializer):
  user = UserSerializer(many = False, read_only= True)
  
  class Meta:
    model = ProjectTimetable
    fields = ['id', 'date_logged', 'time_start', 'time_end', 'project', 'user']




    # CourseSerializer(many=True, read_only=True)