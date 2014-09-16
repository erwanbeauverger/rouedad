Rouedad V4
=======

##Cheatsheets
-Markdown https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists


##Choix des librairies Javascript et CSS

#UI
-Style Bootstrap
---Choix : Angular UI Bootstrap : pure Angular JS avec Bootstrap CSS 3.x http://angular-ui.github.io/bootstrap/

###File Upload
ngupload http://twilson63.github.io/ngUpload/

###Calendar Arshaw 
Full dragndrop calendar for Angular from JQuery
https://github.com/angular-ui/ui-calendar
- Timesheet in CSS3 only http://semu.github.io/timesheet.js/?utm_source=html5weekly&utm_medium=email

###UI Datepicker
https://github.com/angular-ui/ui-date

###Content Editor
TinyMCE 
https://github.com/angular-ui/ui-tinymce

###Sortable list
trè important pour suite de partitions
https://github.com/angular-ui/ui-sortable

###Smart table
http://lorenzofox3.github.io/smart-table-website/
https://github.com/lorenzofox3/Smart-Table


###Google Maps
This directive allows you to add Google Maps Javascript API elements.
https://github.com/angular-ui/ui-map

- Video
--- with markers and actions on the video timelin
--- https://hacks.mozilla.org/2014/08/building-interactive-html5-videos/?utm_source=html5weekly&utm_medium=email

##Routing
Choix : Angular UI Router; raison support plusieurs ng-view dans la même page et les vues "nested" et parallèles.
Non Choix : Angular ngRoute; raison : support une seule vued et ne maintient que des 
Raison = $route for URL routes 
Explication : http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router

```
<script src="js/angular-ui-router.min.js"></script>
```

###HTTP API access
Restangular (recommended by ng-book writers) as nicer than $http and $resource form ngResource (both using the XHR request object)


## AWS SDK

### AWS for Static Web Site
http://www.michaelgallego.fr/blog/2013/08/27/static-website-on-s3-cloudfront-and-route-53-the-right-way/
### Deploy tool to S3 
https://github.com/laurilehmijoki/s3_website


## Authentication
investiguer http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/
qui utilise UI Router pour séparer vue public privé

l'approche du problème http://frederiknakstad.com/2013/01/21/authentication-in-single-page-applications-with-angular-js/

nouvelle solution (25.08.14) : Satellizer
https://github.com/sahat/satellizer?utm_source=javascriptweekly&utm_medium=email


a nice article on UI router and auth http://stackoverflow.com/questions/22537311/angular-ui-router-login-authentication
then they reference ot sample app non trivial
https://github.com/angular-app/angular-app

##Database (à tester)
CouchDB : JSON DB on server
PouchDB : mobile local storage to push to the couchdb
Tutorial https://blog.engineyard.com/2014/an-introduction-to-pouchdb?utm_source=html5weekly&utm_medium=email

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


#Hosting
## Generation de site static incl blog
Jekyll http://jekyllrb.com/

##Hosting sur Gitghub pages
https://pages.github.com/

##Hosting sur AWS S3



