from collections import OrderedDict
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
import sys
sys.path.append("..") # Adds higher directory to python modules path.
from PimlurMOOC.models import PimlurUser, Pimlur, PimlurSubCategory, PimlurItem
from quiz.models import Quiz, Question, Option
# Create your views here.

@login_required
def comments(request):
    # conversations = get_conversations(request)
    
    return render(request, "comments.html", { 'user': request.user })
