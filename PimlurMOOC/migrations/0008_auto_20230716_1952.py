# Generated by Django 2.2.3 on 2023-07-16 17:52

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('PimlurMOOC', '0007_pimlursubcategory_pimlur'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='pimluruser',
            unique_together={('user', 'pimlur')},
        ),
    ]