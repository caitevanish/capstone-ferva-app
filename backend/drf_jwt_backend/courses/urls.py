from django.urls import path, include
from courses import views



urlpatterns = [
  #see all courses on the courses page
  path('all/', views.view_all_courses),  
  
  #see course info on course detail page
  path('<int:pk>/', views.view_course_detail),   #change course_id to pk?
  
  #create new course
  path('add/', views.add_course),

  #update course info
  path('<int:pk>/update/', views.edit_course),

  #update course info
  path('<int:pk>/delete/', views.delete_course),   
]



#add a third parameter? ie. name='index'
