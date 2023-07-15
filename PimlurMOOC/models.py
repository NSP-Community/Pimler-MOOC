from django.db import models
from django.contrib.auth.models import User
import datetime


# Create your models here.

class Pimlur(models.Model):
    name = models.CharField(max_length=50, default="", blank=False)
    description = models.TextField()

    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "{} is interested in {}".format(self.user.username, self.project)

class PimlurUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, )
    pimlur = models.ForeignKey(Pimlur,  on_delete=models.CASCADE)

    def __str__(self):
        return "{} is in {} Pimlur".format(self.user.username, self.pimlur.name)

class PimlurCategory(models.Model):
    name = models.CharField(max_length=50, default="", blank=False)
    description = models.TextField()
    createdBy = models.ForeignKey(User, on_delete=models.CASCADE)
    pimlur = models.ForeignKey(Pimlur, on_delete=models.CASCADE)
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

