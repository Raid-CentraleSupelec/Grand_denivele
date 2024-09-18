from django.urls import path
from django.contrib import admin
from django.views.generic.base import RedirectView
from . import views



# Create your views here.

urlpatterns = [
    path("", RedirectView.as_view(url='/grand_denivele/', permanent=True), name="index"),
    path("admin/", admin.site.urls),
    path('grand_denivele/', views.affichage_equipe, name='affichage_equipe'),
    path('team-data/', views.team_data, name='team_data'),

]
