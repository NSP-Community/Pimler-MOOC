from django.db import models
from django.contrib.auth.models import User
import datetime
import sys
sys.path.append("..") # Adds higher directory to python modules path.
from quiz.models import Quiz
from django.urls import reverse

# Create your models here.

class PimlurCategory(models.Model):
    name = models.CharField(max_length=300, default="", blank=False)
    description = models.TextField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateField(default=datetime.datetime.now)

    def __str__(self):
        return self.name


class Pimlur(models.Model):
    name = models.CharField(max_length=300, default="", blank=False)
    description = models.TextField()
    category = models.ForeignKey(PimlurCategory, on_delete=models.CASCADE)
    pimlurCategory = models.ForeignKey(PimlurCategory,related_name="pimlurCategory",  on_delete=models.CASCADE)

    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class PimlurSubCategory(models.Model):
    name = models.CharField(max_length=300, default="", blank=False)
    description = models.TextField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(PimlurCategory, on_delete=models.CASCADE)
    createdAt = models.DateField(default=datetime.datetime.now)
    pimlur = models.ForeignKey(Pimlur,  on_delete=models.CASCADE)

    def __str__(self):
        return self.name
        
class PimlurUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, )
    pimlur = models.ForeignKey(Pimlur,  on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'pimlur',)

    def __str__(self):
        return "{} is in {} Pimlur".format(self.user.username, self.pimlur.name)

class PimlurItem(models.Model):
    name = models.CharField(max_length=300, default="", blank=False)
    written_content_html = models.TextField()
    video_content_html = models.TextField()
    quiz_content_html  = models.TextField()
    
    quiz = models.ForeignKey(Quiz, on_delete=models.SET_NULL, null=True)
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE, )
    pimlur = models.ForeignKey(Pimlur,  on_delete=models.CASCADE)
    pimlurSubCategory = models.ForeignKey(PimlurSubCategory,  on_delete=models.CASCADE)

    allow_comments = models.BooleanField('allow comments', default=True)

    def __str__(self):
        return self.pimlur.name + ' ' + self.pimlurSubCategory.name + ' ' + self.name

    class Meta:
        ordering = ('-id',)

    def get_absolute_url(self):
        return reverse(
            'single_pimluritem',
            kwargs={'pimlur_id': self.pimlur.id,
                    'pimlurcategory_id': int(self.pimlurSubCategory.id),
                    'pimluritem_id': self.id,
                    'mode': 'wc'
            })
