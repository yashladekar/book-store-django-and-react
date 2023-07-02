from django_filters import rest_framework as filters
from .models import Book

class BookFilter(filters.FilterSet):
    search = filters.CharFilter(method='filter_search')

    class Meta:
        model = Book
        fields = ['title', 'price', 'book_category', 'author']

    def filter_search(self, queryset, name, value):
        return queryset.filter(title__icontains=value) | queryset.filter(author__icontains=value)
