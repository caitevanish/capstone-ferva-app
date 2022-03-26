from django.urls import path
from visionboard import views

app_name = "visionboard"
urlpatterns = [

  path('vb/', views.view_all_images, name="vb_all"),  
  path('vb/<int:pk>/', views.view_single_image, name="vb_detail"),   
  path('vb/add/', views.add_image, name="vb_add"),
  path('vb/<int:pk>/delete/', views.delete_image, name="vb_delete"),   
]