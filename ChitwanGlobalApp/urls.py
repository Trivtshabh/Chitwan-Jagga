from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name="index"),
    path('convert.html', views.convert, name="convert"),
    path('all_products.html', views.all_products, name="all_products"),
]
