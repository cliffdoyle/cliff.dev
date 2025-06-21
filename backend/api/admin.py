# backend/api/admin.py

from django.contrib import admin
from .models import Project, TechnologyTag, Article

# Define a custom admin class for the Article model
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'published_date') # Columns to show in the list view
    list_filter = ('status', 'tags') # Add filters to the sidebar
    search_fields = ('title', 'content') # Add a search bar
    prepopulated_fields = {'slug': ('title',)} # Automatically create slug from title
    filter_horizontal = ('tags',) # The magic for ManyToMany fields!

# Define a custom admin class for the Project model
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    list_filter = ('tags',)
    search_fields = ('title', 'description')
    filter_horizontal = ('tags',) # The same magic here

# Register your models here, but now with their custom admin classes
admin.site.register(Article, ArticleAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(TechnologyTag) # The tag model can be registered normally