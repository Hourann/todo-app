from django.db import models


# Create your models here.
class Todo(models.Model):
    # mandatory
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, default="")
    done = models.BooleanField(default=False, blank=True)

    # optional
    expire_date = models.DateTimeField(null=True, blank=True)
    priority = models.CharField(max_length=1, choices=(('H', 'High'), ('N', 'Normal')), default='N')

    def __str__(self):
        return self.title
