from django.urls import path, include
from projects import views


urlpatterns = [
  #see all projects on the projects page
  path('all/', views.view_all_projects),  
  
  #see project info on project detail page
  path('<int:pk>/', views.view_project_detail),   #change project_id to pk?
  
  #create new project
  path('add/', views.add_project),

  #update project info
  path('<int:pk>/update/', views.edit_project),

  #update project info
  path('<int:pk>/delete/', views.delete_project),   
]