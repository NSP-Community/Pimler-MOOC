from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def dashboard(request):
    # conversations = get_conversations(request)
    
    return render(request, "dashboard.html", { 'user': request.user, 'category': 'All' })

@login_required
def dashboard_category(request, category):
    # conversations = get_conversations(request)
    
    return render(request, "dashboard.html", { 'user': request.user, 'category': category })
