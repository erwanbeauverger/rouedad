Rouedad
=======

choix des js
angular ngRoute = $route for URL routes 
angular ui route = UI.routes for states for routes 

explication
http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router
ngRoute is a module developed by the Angular.js team which was earlier part of the Angular core.

ui-router is a framework which was made outside the Angular.js project to improve and enhance routing capabalities.

From the ui-router documentation:

AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine. Unlike the $route service in Angular core, which is organized around URL routes, UI-Router is organized around states, which may optionally have routes, as well as other behavior, attached.

States are bound to named, nested and parallel views, allowing you to powerfully manage your application's interface.

Neither of them is better, you will have to chose the most appropriate for your project.

However, if you plan to have complex views in your application and you would like to deal with the "$state" notion. I recommend you to chose ui-router.
