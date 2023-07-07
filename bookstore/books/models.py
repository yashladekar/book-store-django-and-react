from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User

class Category(models.Model):
    cat=models.CharField(max_length=100, blank=False,null=True)
    def __str__(self):
        return self.cat  #show models name instead of no in admin
    
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.URLField()
    description = models.TextField()
    ratings = models.DecimalField(max_digits=2, decimal_places=1, default=0.0, validators=[MinValueValidator(0.1), MaxValueValidator(5.0)])
    book_category= models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self):
        return self.title

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    def __str__(self) :
        template= '{0.user} {0.book} {0.quantity}'
        return template.format(self)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    date_ordered = models.DateTimeField(auto_now_add=True)
    def __str__(self) :
        template= '{0.user} {0.book} {0.quantity} {0.date_ordered}'
        return template.format(self)
    