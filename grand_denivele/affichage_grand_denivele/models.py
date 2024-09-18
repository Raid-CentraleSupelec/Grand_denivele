from django.db import models

# Create your models here.

class equipe(models.Model):
    nom = models.CharField(max_length=200)
    altitude = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.nom
    
    