from django.db import models

# Create your models here.
class Project(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField(blank=True, null=True)
    # Pillow for ImageField
    featured_image=models.ImageField(null=True, blank=True,upload_to='projects/')
    live_demo_url=models.URLField(max_length=200, blank=True, null=True)
    date_created=models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title
