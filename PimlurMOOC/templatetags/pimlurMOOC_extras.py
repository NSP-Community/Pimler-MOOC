from collections import OrderedDict

from django import template

from accounts.models import UserProfile
from ..models import PimlurCategory, PimlurUser, Pimlur, PimlurSubCategory

register = template.Library()


@register.filter(name='getPimlurCategories')
def get_pimlurcategories(context):
    pimlurCategorys = PimlurCategory.objects.filter().order_by("-id")
    return pimlurCategorys

@register.filter(name='getMyPimlurs')
def getMyPimlurs(context,user_id):
    pimlurUsers = PimlurUser.objects.filter(user__id=user_id).order_by("-id")
    return pimlurUsers

@register.filter(name='getPimlurs')
def getPimlurs(context,category):
    if (category == "all" or category == "All"): return Pimlur.objects.all().order_by("-id");
    else: return Pimlur.objects.filter(category__name=category).order_by("-id")

# @register.filter(name='getPimlurSubCategories')
# def getPimlurSubCategories(context,id):
#     pimlurSubCategories = PimlurSubCategory.objects.filter(pimlur_id=id)
#     return pimlurSubCategories


# @register.filter(name="getPimlurInfo")
# def getPimlurInfo(context, id):
#     pimlur = Pimlur.objects.get(pk=id)
#     subCategories = PimlurSubCategory.objects.filter(pimlur=pimlur)
#     info = OrderedDict()
#     for subCategory in subCategories:
#         info[subCategory] = PimlurItem.objects.filter(pimlurSubCategory=subCategory)
    
#     return info