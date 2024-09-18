from django.shortcuts import render
from django.http import JsonResponse
from.models import equipe


def affichage_equipe(request):
    teams = equipe.objects.all()
    return render(request, 'affichage_grand_denivele/front_gd.html', {'teams': teams})

def team_data(request):
    teams = list(equipe.objects.values('nom', 'altitude'))
    return JsonResponse(teams, safe=False)