from django.db import models
from courses.models import Course
from django.contrib.auth.models import User

# Create your models here.

class Project(models.Model):

  #Make choices for category of projects (personal, professional, etc.)

  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  description = models.TextField(max_length=3000, null=True, blank=True)
  start_date = models.DateField(null=True, blank=True)
  is_active = models.BooleanField(default=True)
  has_deadline = models.BooleanField(default=False)
  deadline_date = models.DateField(null=True, blank=True)
  has_goal_id = models.BooleanField(default=False)
  # goal_id = models.ForeignKey(blank=True, null=True, on_delete=models.CASCADE)
  has_milestones = models.BooleanField(default=False)
  # milestone_id = models.ForeignKey(blank=True, null=True, on_delete=models.CASCADE)
  course = models.ForeignKey(Course, blank=True, null=True, on_delete=models.CASCADE)
  notes = models.TextField(max_length=3000, null=True, blank=True)
  # images = models.CharField(max_length=1000)

  def __str__(self):
    return self.title