'use strict';

angular.
module('core').
component('peersOnline', {
    templateUrl: 'core/components/peers-online/peers-online.html',
    controllerAs: 'vm',
    controller: function peersOnlineComponent ($uibModal) {
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