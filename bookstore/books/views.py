from django_filters import rest_framework as filters
from .models import Book

class BookFilter(filters.FilterSet):
    class Meta:
        model = Book
        fields = ['title', 'price', 'book_category', 'author']  # 'author' is a simple CharField

from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Book
from .serializers import BookSerializer
from .filters import BookFilter

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = BookFilter
    search_fields = ['title', 'author']  # We can directly use 'author' here.
    ordering_fields = ['title', 'price']
