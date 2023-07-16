from django.db import models
from django.contrib.auth.models import User
import datetime


# Create your models here.

class PimlurCategory(models.Model):
    name = models.CharField(max_length=50, default="", blank=False)
    description = models.TextField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateField(default=datetime.datetime.now)

    def __str__(self):
        return self.name

class PimlurSubCategory(models.Model):
    name = models.CharField(max_length=50, default="", blank=False)
    description = models.TextField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(PimlurCategory, on_delete=models.CASCADE)
    createdAt = models.DateField(default=datetime.datetime.now)

    def __str__(self):
        return self.name

class Pimlur(models.Model):
    name = models.CharField(max_length=50, default="", blank=False)
    description = models.TextField()
    category = models.ForeignKey(PimlurCategory, on_delete=models.CASCADE)
    pimlurCategory = models.ForeignKey(PimlurCategory,related_name="pimlurCategory",  on_delete=models.CASCADE)

    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class PimlurUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, )
    pimlur = models.ForeignKey(Pimlur,  on_delete=models.CASCADE)

    def __str__(self):
        return "{} is in {} Pimlur".format(self.user.username, self.pimlur.name)

class PimlurItem(models.Model):
    written_content_html = models.TextField()
    video_content_html = models.TextField()
    quiz_content_html  = models.TextField()
    
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE, )
    pimlur = models.ForeignKey(Pimlur,  on_delete=models.CASCADE)
    pimlurSubCategory = models.ForeignKey(PimlurSubCategory,  on_delete=models.CASCADE)

    def __str__(self):
        return self.pimlur.name + ' ' + self.pimlurSubCategory.name + ' ' + self.id
