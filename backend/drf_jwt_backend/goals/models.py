from django.db import models
from courses.models import Course
from projects.models import Project
from django.contrib.auth.models import User

# Create your models here.
class Goal(models.Model):

  goal_type_choices = [
    ('ST', 'Short Term'),
    ('LT', 'Long Term'),
  ]

  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  description = models.TextField(max_length=3000, null=True, blank=True)
  start_date = models.DateField(null=True, blank=True)
  goal_type = models.CharField(max_length=50, choices = goal_type_choices, default = 'ST')  #choices option here
  has_project_list = models.BooleanField(default=False)
  project = models.ForeignKey(Project, blank=True, null=True, on_delete=models.CASCADE)
  has_course_list = models.BooleanField(default=False)
  course = models.ForeignKey(Course, blank=True, null=True, on_delete=models.CASCADE) # This will be a list
  has_deadline = models.BooleanField(default=False)
  deadline_date = models.DateField(null=True, blank=True)
  notes = models.TextField(max_length=3000, null=True, blank=True)
  # images = models.CharField(max_length=1000)

  def __str__(self):
    return self.title

# class LongTermGoal(models.Model):

#   # goal_type_choices = [
#   #   ('ST', 'Short Term'),
#   #   ('LT', 'Long Term'),
#   # ]

#   user = models.ForeignKey(User, on_delete=models.CASCADE)
#   title = models.CharField(max_length=100)
#   description = models.TextField(max_length=3000, null=True, blank=True)
#   start_date = models.DateField(null=True, blank=True)
#   goal_type = models.CharField(max_length=50, choices = goal_type_choices, default = 'ST')  #choices option here
#   has_project_list = models.BooleanField(default=False)
#   project = models.ForeignKey(Project, blank=True, null=True, on_delete=models.CASCADE)
#   has_course_list = models.BooleanField(default=False)
#   course = models.ForeignKey(Course, blank=True, null=True, on_delete=models.CASCADE) # This will be a list
#   has_deadline = models.BooleanField(default=False)
#   deadline_date = models.DateField(null=True, blank=True)
#   notes = models.TextField(max_length=3000, null=True, blank=True)
#   # images = models.CharField(max_length=1000)

#   def __str__(self):
#     return self.title