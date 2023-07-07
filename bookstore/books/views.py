# views.py
from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Count
from .models import Book
from .serializers import BookSerializer
from .filters import BookFilter

category_mapping = {
    8: "psychology",
    2: "self help",
    3: "non fiction",
    4: "fiction",
    6: "finance",
    7: "spirituality",
    5: "programming",
    9: "productivity",
    10: "history"
}

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = BookFilter
    search_fields = ['title', 'author']  
    ordering_fields = ['title', 'price']

    @action(detail=False, methods=['get'])
    def categories(self, request):
        queryset = self.get_queryset()
        categories_data = queryset.values('book_category').annotate(total=Count('book_category'))
        results = {}
        for data in categories_data:
            category_id = data.get('book_category')
            category_name = category_mapping.get(category_id)
            if category_name:
                category_books = BookSerializer(queryset.filter(book_category=category_id), many=True).data
                results[category_name] = category_books
        return Response(results)
