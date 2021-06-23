from django.shortcuts import render, redirect
from chitwanjagga.models import Product


# Create your views here.
def index(request):
    products = Product.objects.all()
    print(products[0].name)
    context = {'products':products}
    return render(request, 'index.html', context)

def convert(request):
    return render(request, 'convert.html',{})
