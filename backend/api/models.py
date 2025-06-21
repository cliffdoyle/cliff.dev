from django.db import models

# Create your models here.
class TechnologyTag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Project(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField(blank=True, null=True)
    # Pillow for ImageField
    featured_image=models.ImageField(null=True, blank=True,upload_to='projects/')
    live_demo_url=models.URLField(max_length=200, blank=True, null=True)
    source_code_url = models.URLField(max_length=200, blank=True, null=True)
    date_created=models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(TechnologyTag, blank=True)

    def __str__(self):
        return self.title



class Article(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    featured_image = models.ImageField(null=True, blank=True, upload_to='articles/')
    tags = models.ManyToManyField(TechnologyTag, blank=True)
    published_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_date']

    def __str__(self):
        return self.title
    

