from django.shortcuts import render
from api.models import Note
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view('GET')
def homePage(request):
    noteData = Note.objects.all()  
    
    data = {
        'noteData': noteData
    }
    return HttpResponse("Hello World")   