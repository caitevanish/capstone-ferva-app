from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Project
from .serializers import ProjectSerializer

# Create your views here.

#<<<<<<<<< GET / Retrieve >>>>>>>>>>
#         Get all projects (projects Main Page)
#         Get project details (project detail Page)
#         Get Top 3 Projects (Home page-dashboard)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_all_projects(request):
  projects = Project.objects.filter(user_id=request.user.id)
  # projects = Project.objects.all()
  serializer = ProjectSerializer(projects, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_project_detail(request, pk):
    try:
      project = Project.objects.get(pk=pk) 
    except Project.DoesNotExist:
      raise Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ProjectSerializer(project)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_top_projects(request):
  pass

#<<<<<<<<< POST / Create >>>>>>>>>>
#         Create new project ( project form module)

@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def add_project(request):
  serializer = ProjectSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save(user=request.user)   #Does something go in the argument?
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




#<<<<<<<<< PUT / Update >>>>>>>>>>
#         Update project info (project detail page > Update project form module)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_project(request, pk):
  try:
    project = Project.objects.get(pk=pk)
  except Project.DoesNotExist:
    raise Response(status=status.HTTP_404_NOT_FOUND)
  serializer = ProjectSerializer(project, data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#<<<<<<<<< DELETE / Delete >>>>>>>>>>
#         Delete project (project detail page > Delete project warning module)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_project(request, pk):
  project = Project.objects.get(pk=pk)
  project.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)





# <<<<<<<<<<<<<  BONUS  >>>>>>>>>>>>>>

#<<<<<<<<< ARCHIVE / Archive >>>>>>>>>>
#         Archive project (project detail page > Delete project warning module)
