from django.db import models
from courses.models import Course

# Create your models here.

class Project(models.Model):

  #Make choices for category of projects (personal, professional, etc.)

  title = models.CharField(max_length=30)
  description = models.TextField(max_length=1000)
  start_date = models.DateField(null=True, blank=True)
  is_active = models.BooleanField(default=True)
  has_deadline = models.BooleanField(default=False)
  deadline_date = models.DateField(null=True, blank=True)
  has_goal_id = models.BooleanField(default=False)
  # goal_id = models.ForeignKey(blank=True, null=True, on_delete=models.CASCADE)
  has_milestones = models.BooleanField(default=False)
  # milestone_id = models.ForeignKey(blank=True, null=True, on_delete=models.CASCADE)
  course_id = models.ForeignKey(Course, blank=True, null=True, on_delete=models.CASCADE)
  notes = models.TextField(max_length=1000)
  # images = models.CharField(max_length=1000)

  def __str__(self):
    return self.name