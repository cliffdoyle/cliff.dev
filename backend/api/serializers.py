# This is the code for api/serializers.py
from rest_framework import serializers
from .models import Project,TechnologyTag,Article,Profile

class TechnologyTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologyTag
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['profile_image', 'bio']


class ProjectSerializer(serializers.ModelSerializer):
    tags = TechnologyTagSerializer(many=True, read_only=True)

        # --- NEW: Use a SerializerMethodField for the image ---
    featured_image_url = serializers.SerializerMethodField()
    class Meta:
        model = Project
       # We replace 'featured_image' with our new field
        fields = ['id', 'title', 'description', 'live_demo_url', 'source_code_url', 
                  'date_created', 'tags', 'featured_image_url']
      # --- This method builds the full URL ---
    def get_featured_image_url(self, obj):
        if obj.featured_image:
            return self.context['request'].build_absolute_uri(obj.featured_image.url)
        return None

class ArticleSerializer(serializers.ModelSerializer):
    tags = TechnologyTagSerializer(many=True, read_only=True)
    author_username = serializers.CharField(source='author.username', read_only=True)

      # --- NEW: Use a SerializerMethodField here too ---
    featured_image_url = serializers.SerializerMethodField()
    author_image_url = serializers.SerializerMethodField()
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'content', 'status', 'tags', 
                  'published_date', 'author_username', 'featured_image_url', 'author_image_url']
    
    # --- Method for the article's image ---
    def get_featured_image_url(self, obj):
        if obj.featured_image:
            return self.context['request'].build_absolute_uri(obj.featured_image.url)
        return None
    
    # --- Method for the author's image ---
    def get_author_image_url(self, obj):
        if obj.author and hasattr(obj.author, 'profile') and obj.author.profile.profile_image:
            return self.context['request'].build_absolute_uri(obj.author.profile.profile_image.url)
        return None