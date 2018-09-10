from django.db import models


# Create your models here.
class Todo(models.Model):
    # mandatory
    title = models.CharField(max_length=200)
    description = models.TextField()

    # optional
    expire_date = models.DateTimeField()
    priority = models.CharField(max_length=1, choices=(('H', 'High'), ('N', 'Normal')), default='N', null=False)

    def __str__(self):
        return self.title
