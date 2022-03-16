from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Course
from .serializers import CourseSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny]) #Change to IsAuthenticated?
def get_all_courses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_courses(request):
    print(
      'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
      serializer = CourseSerializer(data=request.data)
      if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
      elif request.method == 'GET':
        courses = Course.objects.filter(user_id=request.user.id)
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)



# <<<<<<<<<<<<<<<<< Notes <<<<<<<<<<<<<<<<<

# (@ 6:03 ) VIEWS: React Django Starter Code - Backend Walkthrough


