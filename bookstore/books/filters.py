from django_filters import rest_framework as filters
from .models import Book

class BookFilter(filters.FilterSet):
    class Meta:
        model = Book
        fields = ['title', 'price', 'book_category', 'author']
