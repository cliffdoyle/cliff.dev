# This is the code for api/serializers.py
from rest_framework import serializers
from .models import Project,TechnologyTag,Article

class TechnologyTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologyTag
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
    tags = TechnologyTagSerializer(many=True, read_only=True)
    author_username = serializers.CharField(source='author.username', read_only=True)

    author_image = serializers.ImageField(source='author.profile.profile_image', read_only=True)
    author_bio = serializers.CharField(source='author.profile.bio', read_only=True)
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'content', 'status', 'featured_image', 'tags', 
                  'published_date', 'author_username', 'author_image', 'author_bio']