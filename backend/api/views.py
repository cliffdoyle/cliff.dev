# backend/api/views.py

from rest_framework import viewsets
from rest_framework.decorators import action # Import action
from rest_framework.response import Response # Import Response

from .models import Project, Article, TechnologyTag
from .serializers import ProjectSerializer, ArticleSerializer, TechnologyTagSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-date_created')
    serializer_class = ProjectSerializer

    # This creates a new custom endpoint at /api/projects/featured/
    @action(detail=False, methods=['get'])
    def featured(self, request):
        # Get the 3 most recent projects
        featured_projects = Project.objects.all().order_by('-date_created')[:3]
        serializer = self.get_serializer(featured_projects, many=True)
        return Response(serializer.data)

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.filter(status='published').order_by('-published_date')
    serializer_class = ArticleSerializer
    lookup_field = 'slug'

    # This creates a new custom endpoint at /api/articles/featured/
    @action(detail=False, methods=['get'])
    def featured(self, request):
        # Get the 3 most recent PUBLISHED articles
        featured_articles = Article.objects.filter(status='published').order_by('-published_date')[:3]
        serializer = self.get_serializer(featured_articles, many=True)
        return Response(serializer.data)

class TechnologyTagViewSet(viewsets.ModelViewSet):
    queryset = TechnologyTag.objects.all()
    serializer_class = TechnologyTagSerializer