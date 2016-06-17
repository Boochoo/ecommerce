/**
 * Created by boochoo on 15/06/16.
 */

angular.module('mainCtrl', [])

.controller('MainController', function($rootScope, $scope, $location, Auth) {

        var vm = this;

        vm.loggedIn = Auth.isLogged();

        //event listener
        $rootScope.$on('$routeChangeStart', function(){

            vm.loggedIn = Auth.isLoggedIn();

            Auth.getUser()
                .then(function(data) {
                    vm.user = data.data;
                });

        });

        //takes form authService

        vm.doLogin = function() {

            vm.processing = true;

            vm.error = '';

            auth.login(vm.loginData.username, vm.loginData.password)
                .success(function(data) {
                    vm.processing = false;

                    Auth.getUser()
                        .then(function(data) {
                            vm.user = data.data;
                        });

                    if(data.success)
                        $location.path('/');
                    else
                    //will get message from login api
                        vm.error = data.message;
                });
        };

        vm.doLogOut = function() {
            Auth.logout();

            $location.path('/logout');

        }

});