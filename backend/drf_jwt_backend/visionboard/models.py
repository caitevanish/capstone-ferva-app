from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def upload_path(instance, filename):
    return '/'.join(['images', str(instance.id), filename])

class Visionboard(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=32, blank=False)
  image = models.ImageField(blank=True, null=True, upload_to=upload_path)

  def __str__(self):
    return self.title