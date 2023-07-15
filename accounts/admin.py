from django.contrib import admin
from accounts.models import *
from accounts.models import UserProfile

admin.site.site_title = "PIMLUR"
admin.site.index_title = "PIMLUR"
admin.site.site_header = "PIMLUR ADMINISTRATION"

admin.site.register(Skill)
admin.site.register(UserProfile)
admin.site.register(Follow)
