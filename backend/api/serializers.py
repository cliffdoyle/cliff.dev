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
    class Meta:
        model = Article
        fields = '__all__'