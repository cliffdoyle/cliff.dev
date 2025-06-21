# backend/api/filters.py
from django_filters import rest_framework as filters
from .models import Project, Article

class ProjectFilter(filters.FilterSet):
    tags = filters.CharFilter(field_name='tags__name', lookup_expr='iexact')
    
    class Meta:
        model = Project
        fields = ['tags']

class ArticleFilter(filters.FilterSet):
    tags = filters.CharFilter(field_name='tags__name', lookup_expr='iexact')

    class Meta:
        model = Article
        fields = ['tags']