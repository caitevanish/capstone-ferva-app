from django.urls import path
from goals import views

app_name = "goals"
urlpatterns = [
  #see all goals on the goals page
  path('all/', views.view_all_goals, name="goal_all"),  
  
  #see goal info on goal detail page
  path('<int:pk>/', views.view_goal_detail, name="goal_detail"),   #change goal_id to pk?
  
  #create new goal
  path('add/', views.add_goal, name="goal_add"),

  #update goal info
  path('<int:pk>/update/', views.edit_goal, name="goal_update"),

  #update goal info
  path('<int:pk>/delete/', views.delete_goal, name="goal_delete"),   
]