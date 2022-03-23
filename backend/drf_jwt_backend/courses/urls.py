from django.urls import path
from courses import views


app_name = "courses"
urlpatterns = [
  # path('/', views.view_all_courses, name="course_main"),
  
  #see all courses on the courses page
  path('', views.view_all_courses, name="course_all"),  
  
  #see course info on course detail page
  path('course/<int:pk>/', views.view_course_detail, name="course_detail"),   #change course_id to pk?
  
  #create new course
  path('add/', views.add_course, name="course_add"),

  #update course info
  path('<int:pk>/update/', views.edit_course, name="course_update"),

  #Delete course info
  path('course/<int:pk>/delete/', views.delete_course, name="course_delete"),   
]



#add a third parameter? ie. name='index'
