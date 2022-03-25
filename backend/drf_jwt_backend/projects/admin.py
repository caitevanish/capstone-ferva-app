from django.contrib import admin
from .models import Project, Milestone, ProjectTimetable

# Register your models here.
admin.site.register(Project)
admin.site.register(Milestone)
admin.site.register(ProjectTimetable)
