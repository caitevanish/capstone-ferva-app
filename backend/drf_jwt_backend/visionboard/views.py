from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from django.shortcuts import render
from .models import Visionboard
from .serializers import VisionboardSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_all_images(request):
  images = Visionboard.objects.filter(user_id=request.user.id)
  #courses = Course.objects.filter(user__id = pk)
  serializer = VisionboardSerializer(images, many=True)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def view_single_image(request, pk):
    try:
      image = Visionboard.objects.get(pk=pk) 
    except Visionboard.DoesNotExist:
      raise Response(status=status.HTTP_404_NOT_FOUND)
    serializer = VisionboardSerializer(image)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def add_image(request):
  serializer = VisionboardSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save(user = request.user)   #Does something go in the argument?
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_image(request, pk):
  image = Visionboard.objects.get(pk=pk)
  image.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)