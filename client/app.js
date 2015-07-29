var angular = require('angular');

require('lodash');
require('restangular');

var config = require('json!../global-config.json');

angular
    .module('eve-restangular', ['restangular'])
    .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider
            .setRestangularFields({
                id: '_id',
                etag: '_etag'
            })
            .setBaseUrl('http://' + config.server.host + ':' + config.server.port + '/')
            .setResponseExtractor(function(response) {
                if (!angular.isArray(response)) return response._items;

                return response;
            });
    }])

    .controller('MainCtrl', [
        '$window', '$scope', 'Restangular',
        function($window, $scope, Restangular) {
            $scope.addUser = function() {
                var firstname = $window.prompt('Enter firstname');
                var lastname = $window.prompt('Enter lastname');

                var user = {
                    firstname: firstname,
                    lastname: lastname
                };

                Restangular.all('user')
                    .post(user)
                    .then($scope.getUsers);
            };

            $scope.delete = function(user) {
                var confirm = $window.confirm('Delete user ' + user.firstname + ' ' + user.lastname + '?');
                if (!confirm) return false;

                user.remove().then($scope.getUsers);
            };

            $scope.modify = function(user) {
                var firstname = $window.prompt('Enter firstname', user.firstname);
                var lastname = $window.prompt('Enter lastname', user.lastname);

                user.patch({
                    firstname: firstname,
                    lastname: lastname
                }).then($scope.getUsers);
            };

            $scope.getUsers = function() {
                Restangular.all('user')
                    .getList()
                    .then(function(users) {
                        $scope.users = users;
                    });
            };

            $scope.getUsers();
        }
    ]);

