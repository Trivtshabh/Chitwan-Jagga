from django.shortcuts import render, redirect
from chitwanjagga.models import Product
from django.db.models import Q


# Create your views here.
def index(request):
    products = Product.objects.all()
    search_text = request.GET.get('search')
    if search_text:
        products = products.filter(Q(name__icontains=search_text)|Q(Description__icontains=search_text )|Q(location__icontains=search_text)) 
    context = {'products':products}
    return render(request, 'index.html', context)

def convert(request):
    return render(request, 'convert.html',{})
