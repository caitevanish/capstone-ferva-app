from django.db import models
from projects.models import Project
from django.contrib.auth.models import User

# Create your models here.
class Goal(models.Model):

  GOAL_TYPE_CHOICES = [
    ('ST', 'Short Term'),
    ('LT', 'Long Term'),
  ]

  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  description = models.TextField(max_length=3000, null=True, blank=True)
  start_date = models.DateField(null=True, blank=True)
  goal_type = models.CharField(max_length=2, choices = GOAL_TYPE_CHOICES, default = 'ST')  #choices option here
  deadline = models.DateField(null=True, blank=True)
  is_active = models.BooleanField(default=True)
  # images = models.CharField(max_length=1000)

  def __str__(self):
    return self.title

class GoalMilestone(models.Model):
  goal = models.ForeignKey(Goal, on_delete=models.PROTECT)
  title = models.CharField(max_length=100)
  deadline = models.DateField(null=True, blank=True)
  completed_on = models.DateField(null=True, blank=True)
  is_active = models.BooleanField(default=True)

class ArchiveGoal(models.Model):
  goal = models.ForeignKey(Goal, on_delete=models.PROTECT)
  archived_on = models.DateField(null=True, blank=True)
