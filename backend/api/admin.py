# backend/api/admin.py

from django.contrib import admin
from .models import Project, TechnologyTag, Article
from ckeditor.widgets import CKEditorWidget
from .models import Profile

# Define a custom admin class for the Article model
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'published_date') # Columns to show in the list view
    list_filter = ('status', 'tags') # Add filters to the sidebar
    search_fields = ('title', 'content') # Add a search bar
    prepopulated_fields = {'slug': ('title',)} # Automatically create slug from title
    filter_horizontal = ('tags',) # The magic for ManyToMany fields!

     # We'll override the form's content widget
    def formfield_for_dbfield(self, db_field, **kwargs):
        if db_field.name == 'content':
            # Use our new 'devto-style' configuration
            kwargs['widget'] = CKEditorWidget(config_name='devto-style')
        return super().formfield_for_dbfield(db_field, **kwargs)

# Define a custom admin class for the Project model
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    list_filter = ('tags',)
    search_fields = ('title', 'description')
    filter_horizontal = ('tags',) # The same magic here

# Register your models here, but now with their custom admin classes
admin.site.register(Profile)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(TechnologyTag) # The tag model can be registered normally