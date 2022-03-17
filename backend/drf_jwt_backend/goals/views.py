from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Goal
from .serializers import GoalSerializer

# Create your views here.

#<<<<<<<<< GET / Retrieve >>>>>>>>>>
#         Get all goals (Goals Main Page)
#         Get goal details (Goal detail Page)
#         Get Top 3 Goals (Home page-dashboard)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_all_goals(request):
  # goals = Goal.objects.filter(user_id=request.user.id)
  goals = Goal.objects.all()
  serializer = GoalSerializer(goals, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_goal_detail(request, pk):
    try:
      goal = Goal.objects.get(pk=pk) 
    except Goal.DoesNotExist:
      raise Response(status=status.HTTP_404_NOT_FOUND)
    serializer = GoalSerializer(goal)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_top_goals(request):
  pass

#<<<<<<<<< POST / Create >>>>>>>>>>
#         Create new goal ( Goal form module)

@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def add_goal(request):
  serializer = GoalSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()   #Does something go in the argument?
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




#<<<<<<<<< PUT / Update >>>>>>>>>>
#         Update goal info (Goal detail page > Update Goal form module)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_goal(request, pk):
  try:
    goal = Goal.objects.get(pk=pk)
  except Goal.DoesNotExist:
    raise Response(status=status.HTTP_404_NOT_FOUND)
  serializer = GoalSerializer(goal, data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#<<<<<<<<< DELETE / Delete >>>>>>>>>>
#         Delete goal (Goal detail page > Delete Goal warning module)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_goal(request, pk):
  goal = Goal.objects.get(pk=pk)
  goal.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)





# <<<<<<<<<<<<<  BONUS  >>>>>>>>>>>>>>

#<<<<<<<<< ARCHIVE / Archive >>>>>>>>>>
#         Archive goal (goal detail page > Delete goal warning module)