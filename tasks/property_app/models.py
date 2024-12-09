from django.db import models


# Create your models here.
class PropertyListing(models.Model):
    PROPERTY_TYPES = [
        ('Residential', 'Residential'),
        ('Commercial', 'Commercial'),
    ]

    STATUS_CHOICES = [
        ('Available', 'Available'),
        ('Sold', 'Sold'),
    ]

    name = models.CharField(max_length=255, verbose_name="Property Name")
    location = models.CharField(max_length=255, verbose_name="Property Location")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Property Price")
    type = models.CharField(max_length=20, choices=PROPERTY_TYPES, verbose_name="Property Type")
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, verbose_name="Status")

    def __str__(self):
        return self.name