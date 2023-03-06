from django.shortcuts import render
from api.models import Note
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def homePage(request):
    return HttpResponse("Hello World")

@api_view(['GET'])
def getNotes(request):
    noteData = Note.objects.all()
    data = {
        'noteData': noteData
    }
    return Response("pk")

@api_view(['GET'])
def getNote(request, notesId):
    noteData = Note.objects.get(id=notesId)
    data = {
        'noteData': noteData
    }
    return Response(notesId)

