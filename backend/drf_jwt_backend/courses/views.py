from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Course
from .serializers import CourseSerializer

# Create your views here.


#<<<<<<<<< GET / Retrieve >>>>>>>>>>
#--Done-- Get all courses (Courses Main Page)
#--Done-- Get course details (Course detail Page)
#         Get Top 3 Courses (Home page-dashboard)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_all_courses(request):
  # courses = Course.objects.filter(user_id=request.user.id)
  courses = Course.objects.all()
  serializer = CourseSerializer(courses, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_course_detail(request, pk):
    try:
      course = Course.objects.get(pk=pk) 
    except Course.DoesNotExist:
      raise Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CourseSerializer(course)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_top_courses(request):
  pass


#<<<<<<<<< POST / Create >>>>>>>>>>
#         Create new course ( Course form module)

@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def add_course(request):
  serializer = CourseSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()   #Does something go in the argument?
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#<<<<<<<<< PUT / Update >>>>>>>>>>
#         Update course info (Course detail page > Update course form module)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_course(request, pk):
  try:
    course = Course.objects.get(pk=pk)
  except Course.DoesNotExist:
    raise Response(status=status.HTTP_404_NOT_FOUND)
  serializer = CourseSerializer(course, data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#<<<<<<<<< DELETE / Delete >>>>>>>>>>
#         Delete course (Course detail page > Delete form warning module)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_course(request, pk):
  course = Course.objects.get(pk=pk)
  course.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)



# <<<<<<<<<<<<<<<<< Notes <<<<<<<<<<<<<<<<<

# (@ 6:03 ) VIEWS: React Django Starter Code - Backend Walkthrough


# @api_view(['GET'])
# @permission_classes([AllowAny]) #Change to IsAuthenticated?
# def get_all_courses(request):
#     courses = Course.objects.all()
#     serializer = CourseSerializer(courses, many=True)
#     return Response(serializer.data)


# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_courses(request):
#     print(
#       'User ', f"{request.user.id} {request.user.email} {request.user.username}")
#     if request.method == 'POST':
#       serializer = CourseSerializer(data=request.data)
#       if serializer.is_valid():
#         serializer.save(user=request.user)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#       elif request.method == 'GET':
#         courses = Course.objects.filter(user_id=request.user.id)
#         serializer = CourseSerializer(courses, many=True)
#         return Response(serializer.data)