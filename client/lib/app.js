var app = angular.module('authSampleApp', [
    'angular-meteor',
    'angular-meteor.auth',
    'ui.router',
    'accounts.ui'
]);

app.config([
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    '$authProvider',

    function($urlRouterProvider, $stateProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'client/main.html',
                controller: 'mainController',
                controllerAs: 'vm',
                data: {
                    documentTitle: 'Main'
                }
            })
            .state('member', {
                url: '/',
                templateUrl: 'client/member.html',
                data: {
                    documentTitle: 'Member'
                },
                resolve: {
                    currentUser: function() {
                        debugger;
                        return $authProvider.$get().requireValidUser(function(user) {
                            return true;
                        });

                    }
                }
            });

        $urlRouterProvider.otherwise("/");
    }
]);
