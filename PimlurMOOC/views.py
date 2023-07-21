from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def comments(request):
    # conversations = get_conversations(request)
    
    return render(request, "comments.html", { 'user': request.user })

def contact(request):
    # conversations = get_conversations(request)
    
    return render(request, "contact.html", { 'user': request.user })


def about(request):
    # conversations = get_conversations(request)
    
    return render(request, "about.html", { 'user': request.user })

