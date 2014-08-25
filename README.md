Rouedad
=======

#Choix des librairies Javascript et CSS

##UI
###Style Bootstrap
Choix : Angular UI Bootstrap : pure Angular JS avec Bootstrap CSS 3.x
http://angular-ui.github.io/bootstrap/

###Calendar Arshaw 
Full dragndrop calendar for Angular from JQuery
https://github.com/angular-ui/ui-calendar

###UI Datepicker
https://github.com/angular-ui/ui-date

###Content Editor
TinyMCE 
https://github.com/angular-ui/ui-tinymce

###Sortable list
trè important pour suite de partitions
https://github.com/angular-ui/ui-sortable

###Google Maps
This directive allows you to add Google Maps Javascript API elements.
https://github.com/angular-ui/ui-map


##Routing
Choix : Angular UI Router; raison support plusieurs ng-view dans la même page et les vues "nested" et parallèles.
Non Choix : Angular ngRoute; raison : support une seule vued et ne maintient que des 
Raison = $route for URL routes 
Explication : http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router

```
<script src="js/angular-ui-router.min.js"></script>
```

## AWS SDK

## Authentication
investiguer http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/
qui utilise UI Router pour séparer vue public privé

l'approche du problème http://frederiknakstad.com/2013/01/21/authentication-in-single-page-applications-with-angular-js/

nouvelle solution (25.08.14) : Satellizer
https://github.com/sahat/satellizer?utm_source=javascriptweekly&utm_medium=email


a nice article on UI router and auth http://stackoverflow.com/questions/22537311/angular-ui-router-login-authentication
then they reference ot sample app non trivial
https://github.com/angular-app/angular-app

#Database
CouchDB : JSON DB on server
PouchDB : mobile local storage to push to the couchdb

#Test
## Protractor : end to end test for AngularJS
https://github.com/angular/protractor

# Tips and Tricks
## IE8
F12 to access Developer Tools in IE8

## JS console for IE8 or Chromes or any other
to access any Angular scopes : 
http://ionicframework.com/blog/angularjs-console/?utm_source=javascriptweekly&utm_medium=email


#Littérature
à suivire : Javascript for Kids
http://www.nostarch.com/javascriptforkids?utm_source=javascriptweekly&utm_medium=email

à chercher : Webbots and spiders and screen scrapers http://www.nostarch.com/javascriptforkids?utm_source=javascriptweekly&utm_medium=email




