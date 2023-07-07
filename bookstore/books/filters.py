# filters.py
import django_filters
from .models import Book

class BookFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = django_filters.NumberFilter(field_name="price", lookup_expr='lte')
    category = django_filters.CharFilter(method='filter_by_category')

    class Meta:
        model = Book
        fields = ['min_price', 'max_price', 'category']

    def filter_by_category(self, queryset, name, value):
        return queryset.filter(book_category__cat__icontains=value)
