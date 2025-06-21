# CORRECT - backend/api/views.py

from rest_framework import viewsets
from .models import Project, Article, TechnologyTag          # Import your models
from .serializers import ProjectSerializer, ArticleSerializer, TechnologyTagSerializer  # Import your serializers

class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Project.objects.all().order_by('-date_created')
    serializer_class = ProjectSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    """
    API endpoint for published articles.
    """
    # Only show articles that are "published" to the public API
    queryset = Article.objects.filter(status='published').order_by('-published_date')
    serializer_class = ArticleSerializer
    lookup_field = 'slug'  # Allows fetching an article by its slug (e.g., /api/articles/my-first-post/)

class TechnologyTagViewSet(viewsets.ModelViewSet):
    """
    API endpoint for technology tags.
    """
    queryset = TechnologyTag.objects.all()
    serializer_class = TechnologyTagSerializer