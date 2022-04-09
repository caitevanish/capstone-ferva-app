from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Course(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  company = models.CharField(max_length=100, null=True, blank=True)
  price = models.IntegerField()
  purchase_date = models.DateField(null=True, blank=True)
  purchase_type = models.CharField(max_length=30,null=True, blank=True) # If I only have a couple choices to offer, what's the correct datafield type?
  # project = models.ManyToManyField("Project", many=True, blank=True, null=True, on_delete=models.CASCADE)
  is_active = models.BooleanField(default=True)
  help_me_to = models.TextField(max_length=3000, blank=True, null=True)
  be_great = models.TextField(max_length=3000, blank=True, null=True)

  def __str__(self):
    return self.title

class StudyTimetable(models.Model):

  #Make choices for category of projects (personal, professional, etc.)

  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date_logged = models.DateField(null=True, blank=True)
  time_start = models.TimeField(auto_now=False, default=False, editable=True)
  time_end = models.TimeField(auto_now=False, default=False, editable=True)
  course = models.ForeignKey(Course, blank=True, null=True, on_delete=models.CASCADE)

#Do I include string overflow?