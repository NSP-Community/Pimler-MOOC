from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def dashboard(request):
    # conversations = get_conversations(request)

    return render(request, "dashboard.html", {})
