from django.shortcuts import render

from property_app.models import PropertyListing


def index(request):
    return render(request, 'index.html', {})


def property_list(request):
    properties = PropertyListing.objects.all()
    locations = PropertyListing.objects.values_list('location', flat=True).distinct()

    # Filter logic
    price_range = request.GET.get('price_range')
    location = request.GET.get('location')
    property_type = request.GET.get('type')
    status = request.GET.get('status')

    if price_range:
        min_price, max_price = map(int, price_range.split('-'))
        properties = properties.filter(price__gte=min_price, price__lte=max_price)

    if location:
        properties = properties.filter(location=location)

    if property_type:
        properties = properties.filter(type=property_type)

    if status:
        properties = properties.filter(status=status)

    return render(request, 'index.html', {
        'properties': properties,
        'locations': locations,
    })