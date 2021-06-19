
from django.shortcuts import render, redirect
from django import views
from chitwanjagga import models, forms



# Create your views here.
def index(request):
    return render(request, 'index.html',{})

def convert(request):
    return render(request, 'convert.html',{})
