from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.ListTodo.as_view()),
    url(r'^(?P<pk>\d+)/$', views.DetailTodo.as_view())
]