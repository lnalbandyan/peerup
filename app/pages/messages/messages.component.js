'use strict';

angular.
module('peerUp').
component('messages', {
    templateUrl: 'pages/messages/messages.html',
    controllerAs: 'vm',
    controller: function messagesComponenet($uibModal ) {
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
    }
});
