from django.db import models
from django.contrib.auth.models import User

from projects.models import Project

# Create your models here.

class Course(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  price = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
  company = models.ForeignKey('Company', on_delete=models.PROTECT)
  purchase_type = models.OneToOneField('PurchaseType', on_delete=models.PROTECT, primary_key=True) 
  purchase_date = models.DateField(null=True, blank=True)
  projects = models.ManyToManyField(Project, related_name='projects')
  is_active = models.BooleanField(default=True)
  help_me_to = models.TextField(max_length=3000, blank=True, null=True)
  be_great = models.TextField(max_length=3000, blank=True, null=True)

  def __str__(self):
    return self.title

class PurchaseType(models.Model):
  TYPE_CHOICES = [
    ('SP', 'Single Payment'),
    ('MS', 'Month Subscription'),
    ('AS', 'Annual Subscription'),
    ('PP', 'Payment Plan'),
  ] 
  type = models.CharField(max_length=2, choices=TYPE_CHOICES, default= 'SP')
  is_one_time_pay = models.BooleanField(default=True)

  def __str__(self):
    return self.type

class Company(models.Model):
  name = models.CharField(max_length=100)
  url = models.TextField(max_length=100, null=True, blank=True)

  def __str__(self):
    return self.name

class CourseWishlist(models.Model):
  title = models.CharField(max_length=100)
  url = models.TextField(max_length=100, null=True, blank=True)
  company = models.ForeignKey(Company, on_delete=models.CASCADE)
  price = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
  why_not_now = models.TextField(max_length=3000, blank=True, null=True)
  notes = models.TextField(max_length=3000, blank=True, null=True)

  def __str__(self):
    return self.title


class StudyTimetable(models.Model):
  course = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)
  date_logged = models.DateTimeField(auto_now_add=True)
  time_start = models.DateTimeField(auto_now_add=True)
  time_end = models.DateTimeField(auto_now=True)

  class ArchiveCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.PROTECT)
    archived_on = models.DateField(null=True, blank=True)


#Junction Tables

# class UserCourse(models.Model):
#   course = models.ForeignKey(Course, on_delete=models.CASCADE)
#   user =  models.ForeignKey(User, on_delete=models.CASCADE) 

# class CourseProject(models.Model):
#   course = models.ForeignKey(Course, on_delete=models.CASCADE)
#   project = models.ForeignKey(Project, on_delete=models.CASCADE)
#   user = models.ForeignKey(User, on_delete=models.CASCADE) 