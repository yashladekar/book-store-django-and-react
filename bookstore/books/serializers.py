# serializers.py
from rest_framework import serializers
from .models import Book, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['cat']

class BookSerializer(serializers.ModelSerializer):
    book_category = CategorySerializer()
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'price', 'image_url','ratings', 'description', 'book_category']
