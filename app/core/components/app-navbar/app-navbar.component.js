'use strict';

angular.
    module('core').
    component('appNavbar', {
        templateUrl: 'core/components/app-navbar/app-navbar.template.html',
        controllerAs: 'vm',
        controller: function appNavbarComponent ($uibModal) {
            var vm = this;
            vm.openNewMessage = function (size) {
                var parentElem = angular.element('body');
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'core/components/app-navbar/new-message/new-message.html',
                    size: size,
                    appendTo: parentElem,
                    controllerAs: 'vm',
                    controller: function ($uibModalInstance) {
                        var vm = this;
                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
                });
            };
        },
        bindings: {
            active: '<'
        }
    });