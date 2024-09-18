from django.contrib import admin

from .models import equipe

admin.site.register(equipe)

class EquipeAdmin(admin.ModelAdmin):
    list_display = ('equipe', 'altitude')
    search_fields = ('equipe',)