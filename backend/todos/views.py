from rest_framework import generics
from django.shortcuts import render

from .models import Todo
from .serializers import TodoSerializer


# Create your views here.

class ListTodo(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
