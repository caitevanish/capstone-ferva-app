from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Goal
from .serializers import GoalSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny]) #Change to IsAuthenticated?
def get_all_goals(request):
    goals = Goal.objects.all()
    serializer = GoalSerializer(goals, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_goals(request):
    print(
      'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
      serializer = GoalSerializer(data=request.data)
      if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
      elif request.method == 'GET':
        goals = Goal.objects.filter(user_id=request.user.id)
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data)