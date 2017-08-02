'use strict';

angular.
module('peerUp').
component('forumHomeReply', {
    templateUrl: 'pages/forum-home-reply/forum-home-reply.html',
    controllerAs: 'vm',
    controller: function forumHomeReplyComponenet($uibModal ) {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '80px'});
        }

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
