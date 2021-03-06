'use strict';

angular.
module('core').
component('following', {
    templateUrl: 'core/components/following/following.html',
    controllerAs: 'vm',
    controller: function followingComponent ($uibModal) {
        var vm = this;
        vm.openUsersProfile = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/business-profile/users-profile-modal/users-profile-modal.html',
                size: size,
                appendTo: parentElem
            });
        };
    },
    bindings: {

    }
});