# urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from books.views import BookViewSet

router = SimpleRouter()
router.register(r'books', BookViewSet, basename='books')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]