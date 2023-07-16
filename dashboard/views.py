from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
import sys
sys.path.append("..") # Adds higher directory to python modules path.
from PimlurMOOC.models import PimlurUser
# Create your views here.

@login_required
def dashboard(request):
    # conversations = get_conversations(request)
    
    return render(request, "dashboard.html", { 'user': request.user, 'category': 'All' })

@login_required
def dashboard_category(request, category):
    # conversations = get_conversations(request)
    
    return render(request, "dashboard.html", { 'user': request.user, 'category': category })

@login_required
def join_pimlur(request):
    pimlurId = request.POST['pimlurId'];

    PimlurUser.objects.create(user_id=request.user.id, pimlur_id=pimlurId)
    return redirect("/dashboard/pimlurs/" + pimlurId)