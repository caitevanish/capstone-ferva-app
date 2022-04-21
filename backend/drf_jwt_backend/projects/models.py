from django.db import models
# from courses.models import Course
from django.contrib.auth.models import User
# from goals.models import Goal

# Create your models here.

class Project(models.Model):
  PROJECT_TYPE_CHOICES = [
  ('PER', 'Personal'),
  ('PRO', 'Professional'),
  ('MIS', 'Other'),
  ]
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  description = models.TextField(max_length=3000, null=True, blank=True)
  start_date = models.DateField(null=True, blank=True)
  project_type = models.CharField(max_length=3, choices = PROJECT_TYPE_CHOICES, default = 'PER')
  goals = models.ManyToManyField('goals.Goal', related_name='goal_name')
  deadline = models.DateField(null=True, blank=True)
  is_active = models.BooleanField(default=True)
  has_milestones = models.BooleanField(default=False)
  be_great_if = models.TextField(max_length=3000, null=True, blank=True)
  notes = models.TextField(max_length=3000, null=True, blank=True)
  # images = models.CharField(max_length=1000)

  def __str__(self):
    return self.title

class Milestone(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  is_active = models.BooleanField(default=True)
  project = models.ForeignKey(Project, blank=True, null=True, on_delete=models.CASCADE)


class ProjectTimetable(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, primary_key=True)
  date_logged = models.DateTimeField(auto_now_add=True)
  time_start = models.DateTimeField(auto_now_add=True)
  time_end = models.DateTimeField(auto_now=True)

class ArchiveProject(models.Model):
  project = models.ForeignKey(Project, on_delete=models.PROTECT)
  archived_on = models.DateField(null=True, blank=True)