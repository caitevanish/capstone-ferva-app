from django.urls import path
from projects import views

app_name = "projects"
urlpatterns = [
  #see all projects on the projects page
  path('', views.view_all_projects, name="project_all"),  
  
  #see project info on project detail page
  path('project/<int:pk>/', views.view_project_detail, name="project_detail"),   #change project_id to pk?
  
  #create new project
  path('add/', views.add_project, name="project_add"),

  #update project info
  path('<int:pk>/update/', views.edit_project, name="project_update"),

  #delete project info
  path('<int:pk>/delete/', views.delete_project, name="project_delete"),  



  #Milestones
  path('ms/', views.view_all_milestones, name="milestones_all"),
  path('ms/add/', views.add_milestone, name="milestone_add"),
  path('ms/<int:pk>/delete/', views.delete_milestone, name="milestone_delete"), 

  #TimeTable  
  path('tt/', views.view_all_times, name="timetable_all"),
  path('tt/add/', views.add_timestamp, name="timetable_add"),
  path('tt/<int:pk>/update/', views.edit_timestamp, name="timetable_update"),
  path('tt/<int:pk>/delete/', views.delete_timestamp, name="timetable_delete"), 
]