from collections import OrderedDict
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
import sys
sys.path.append("..") # Adds higher directory to python modules path.
from PimlurMOOC.models import PimlurUser, Pimlur, PimlurSubCategory, PimlurItem
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
    print(pimlurId)
    PimlurUser.objects.create(user_id=request.user.id, pimlur_id=pimlurId)
    return redirect("/dashboard/pimlurs/" + pimlurId)


@login_required
def single_pimlur(request, id):
    pimlur = Pimlur.objects.get(pk=id)

    subCategories = PimlurSubCategory.objects.filter(pimlur=pimlur)
    info = {}
    
    exists = PimlurUser.objects.filter(user_id=request.user.id, pimlur_id=id)
    if not len(exists):
        PimlurUser.objects.create(user_id=request.user.id, pimlur_id=id)

    for subCategory in subCategories:
        _items = PimlurItem.objects.filter(pimlurSubCategory=subCategory)
        info[subCategory] = _items;

    return render(request, "single_pimlur.html", {
        'pimlur': pimlur, 'info': info.items(),
     })