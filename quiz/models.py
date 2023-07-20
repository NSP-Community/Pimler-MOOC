from django.db import models

# Create your models here.

class Quiz(models.Model):
    name = models.CharField(max_length=300)


class Question(models.Model):
    value = models.CharField(max_length=300)
    question_type = models.CharField(max_length=300)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)


class Option(models.Model):
    value = models.CharField(max_length=300)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    correct = models.BooleanField()
