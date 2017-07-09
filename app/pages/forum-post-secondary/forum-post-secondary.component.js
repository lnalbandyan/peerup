'use strict';

angular.
module('peerUp').
component('forumPostSecondary', {
    templateUrl: 'pages/forum-post-secondary/forum-post-secondary.html',
    controllerAs: 'vm',
    controller: function forumPostSecondaryComponenet($uibModal ) {
        var vm = this;
        if ($(window).width() < 1025) {

        } else {
            var $sticky = $('.sticky');
            var $stickyrStopper = $('.sticky-stopper');
            if (!!$sticky.offset()) { // make sure ".sticky" element exists

                var generalSidebarHeight = $sticky.innerHeight();
                var stickyTop = $sticky.offset().top;
                var stickOffset = 0;
                var stickyStopperPosition = $stickyrStopper.offset();
                var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
                var diff = stopPoint + stickOffset;

                $(window).scroll(function () { // scroll event
                    var windowTop = $(window).scrollTop(); // returns number

                    if (stopPoint < windowTop) {
                        $sticky.css({position: 'absolute', top: diff});
                    } else if (stickyTop < windowTop + stickOffset) {
                        $sticky.css({position: 'fixed', top: '77px'});
                    } else {
                        $sticky.css({position: 'absolute', top: '0px'});
                    }
                });
            }
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
