/*(function () {
    'use strict';

    angular
        .module('eventApp')
        .controller('EditProfileController', EditProfileController);

    EditProfileController.$inject = ['$scope'];

    /!* @ngInject *!/
    function EditProfileController($scope) {
        var vm = this;
        vm.title = 'ControllerName';

        activate();

        ////////////////

        function activate() {
            code
        }
    }

})();*/

'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController ($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function (email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);

        }
    }

);