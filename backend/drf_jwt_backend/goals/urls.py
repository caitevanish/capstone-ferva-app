from django.urls import path, include
from goals import views


urlpatterns = [
  #see all goals on the goals page
  path('all/', views.view_all_goals),  
  
  #see goal info on goal detail page
  path('<int:pk>/', views.view_goal_detail),   #change goal_id to pk?
  
  #create new goal
  path('add/', views.add_goal),

  #update goal info
  path('<int:pk>/update/', views.edit_goal),

  #update goal info
  path('<int:pk>/delete/', views.delete_goal),   
]