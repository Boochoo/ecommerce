/**
 * Created by boochoo on 16/06/16.
 */

angular.module('appRoutes', ['ui-router'])

.config(function ($stateProvider, $urlRouterProvider)
{
    $stateProvider
        .state('/', {
            url: 'app/views/pages/home.html'
        }
    )
})