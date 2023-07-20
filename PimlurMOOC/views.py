from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def comments(request):
    # conversations = get_conversations(request)
    
    return render(request, "comments.html", { 'user': request.user })

