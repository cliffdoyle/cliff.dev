from django.contrib import admin
from .models import Project, TechnologyTag, Article # import the project model

# Register your models here.
admin.site.register(Project)
admin.site.register(TechnologyTag)
admin.site.register(Article)

