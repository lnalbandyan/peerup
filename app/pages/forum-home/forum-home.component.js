'use strict';

angular.
module('peerUp').
component('forumHome', {
    templateUrl: 'pages/forum-home/forum-home.html',
    controllerAs: 'vm',
    controller: function forumHomeComponenet($uibModal ) {
        var vm = this;
        var $sticky = $('.sticky');
        $sticky.css({position: 'fixed', top: '66px'});

        vm.openReport = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/business-profile/report-modal/report-modal.html',
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
