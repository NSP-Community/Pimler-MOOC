from django.contrib import admin

from .models import Pimlur, PimlurItem, PimlurUser, PimlurCategory, PimlurSubCategory

# Register your models here.

admin.site.register(Pimlur)
admin.site.register(PimlurItem)
admin.site.register(PimlurUser)
admin.site.register(PimlurCategory)
admin.site.register(PimlurSubCategory)