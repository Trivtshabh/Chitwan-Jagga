"""ChitwanGlobal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from ChitwanGlobal import settings
from chitwanjagga import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('ChitwanGlobalApp.urls')),
    path('', include('chitwanjagga.urls')),
    path('login/', views.LoginUserView.as_view(), name='login'),
    path('logout/', views.LogOutUserView.as_view(), name='logout'),
    path('add_product/', views.ProductAddView.as_view(), name='add_product'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
