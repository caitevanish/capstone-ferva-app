from django.db import models

# Create your models here.

class Course(models.Model):
  title = models.CharField(max_length=30)
  company = models.CharField(max_length=30, null=True, blank=True)
  price = models.IntegerField()
  purchase_date = models.DateField(null=True, blank=True)
  purchase_type = models.CharField(max_length=30,null=True, blank=True) # If I only have a couple choices to offer, what's the correct datafield type?
  # project_id = models.ForeignKey(blank=True, null=True, on_delete=models.CASCADE) #Do I need to pass something in the first argument?
  # goal_id = models.ForeignKey(blank=True, null=True, on_delete=models.CASCADE) #Same question.
  is_active = models.BooleanField(default=True)
  notes = models.TextField(max_length=1000)


  def __str__(self):
    return self.title

#Do I include string overflow?