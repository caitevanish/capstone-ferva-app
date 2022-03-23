from django.urls import path, include
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
]