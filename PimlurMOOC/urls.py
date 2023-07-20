"""PimlurMOOC URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from . import views
from django.urls import include, path, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path("dashboard/", include("dashboard.urls")),
    path("project/", include("project.urls")),
    path('comments', views.comments, name="comments"),
    path('messages/', include('django_messages.urls')),
    re_path(r'^sent/$', views.sent, name='comments-xtd-sent'),
    re_path(r'^confirm/(?P<key>[^/]+)/$', views.confirm,
            name='comments-xtd-confirm'),
    re_path(r'^mute/(?P<key>[^/]+)/$', views.mute, name='comments-xtd-mute'),
    re_path(r'^reply/(?P<cid>\d+)/$', views.reply, name='comments-xtd-reply'),

    # Remap comments-flag to check allow-flagg<ing is enabled.
    re_path(r'^flag/(\d+)/$', views.flag, name='comments-flag'),
    # New flags in addition to those provided by django-contrib-comments.
    re_path(r'^like/(\d+)/$', views.like, name='comments-xtd-like'),
    re_path(r'^liked/$', views.like_done, name='comments-xtd-like-done'),
    re_path(r'^dislike/(\d+)/$', views.dislike, name='comments-xtd-dislike'),
    re_path(r'^disliked/$', views.dislike_done,
            name='comments-xtd-dislike-done'),

    # API handlers.
    path('api/', include("django_comments_xtd.api.urls"),
         {'override_drf_defaults': True}),

    path('', include("django_comments.urls")),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
