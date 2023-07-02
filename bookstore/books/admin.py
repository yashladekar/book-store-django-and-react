from django.contrib import admin

# Register your models here.
from .models import Cart, Book, Order, Category

# Register your models here.
admin.site.register(Cart)
admin.site.register(Book)
admin.site.register(Order)
admin.site.register(Category)