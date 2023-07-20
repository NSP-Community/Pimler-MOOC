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

@login_required
def single_pimluritem(request, pimlur_id, pimlurcategory_id, pimluritem_id, mode):
    pimlurItem = PimlurItem.objects.get(pk=pimluritem_id)
    pimlur = Pimlur.objects.get(pk=pimlur_id)

    subCategories = PimlurSubCategory.objects.filter(pimlur=pimlur)
    info = {}
    
    exists = PimlurUser.objects.filter(user_id=request.user.id, pimlur_id=pimlur_id)
    if not len(exists):
        PimlurUser.objects.create(user_id=request.user.id, pimlur_id=pimlur_id)

    for subCategory in subCategories:
        _items = PimlurItem.objects.filter(pimlurSubCategory=subCategory)
        info[subCategory] = _items;

    quizQuestions = Question.objects.filter(quiz=pimlurItem.quiz.id);
    for question in quizQuestions:
        question.options = list(Option.objects.filter(question_id=question.id))

    quizQuestions = list(quizQuestions)
    
    answers_html = ""

    for question in quizQuestions:
        value = "";
        if question.question_type == "input" or question.question_type == "radio":
            for option in question.options:
                if (option.correct):
                    value = '"' + str(option.id) + '"';
                    break;
        elif question.question_type == "checkbox":
            value += '['
            for option in question.options:
                if (option.correct):
                    value += '"' + str(option.id) + '",';
            value += '],'
            
        if not question.id == quizQuestions[len(quizQuestions) - 1].id: answers_html += value + ",";
        if question.id == quizQuestions[len(quizQuestions) - 1].id: answers_html += value
    return render(request, "single_pimluriten" + mode + ".html", {
        'quizQuestions': quizQuestions, 'answers_html': answers_html,
        'pimlur': pimlur, 'info': info.items(),
        'pimlurItem': pimlurItem,
        'pimlur_id': pimlur_id, 'pimlurcategory_id': pimlurcategory_id, 
        'pimluritem_id': pimluritem_id, 'mode': mode
     })