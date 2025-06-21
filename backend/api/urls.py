#This file contains the code for api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet,TechnologyTagViewSet,ArticleViewSet

#Create a router and register our viewe with it.
router=DefaultRouter()
router.register(r'projects',ProjectViewSet,basename='project')
router.register(r'articles', ArticleViewSet, basename='article')
router.register(r'tags', TechnologyTagViewSet, basename='tag')

#The API URLs are now determined automatically by the router
urlpatterns=[
    path('',include(router.urls))
]