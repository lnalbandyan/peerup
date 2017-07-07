'use strict';

angular.
module('peerUp').
component('eventsDetail', {
    templateUrl: 'pages/events-detail/events-detail.html',
    controllerAs: 'vm',
    controller: function eventsDetailComponenet($uibModal ) {
        var vm = this;
        vm.items = [1, 2, 3, 4, 5, 6, 7, 8];
        vm.properties = {
            items: 1,
            loop: true,
            dots: false,
            nav:true,
            onChange: function () {

            }
        };
        vm.postLink = function (e) {
            $(".create-poll, .brain-map, .ask-question, .share-story, .guest-list").hide();
            $(".create-post, .timeline-block").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };

        vm.pollLink = function (e) {
            $(".create-post, .brain-map, .ask-question, .share-story, .guest-list").hide();
            $(".create-poll, .timeline-block").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };

        vm.guestLink = function (e) {
            $(".create-post, .brain-map, .ask-question, .share-story, .create-poll").hide();
            $(".guest-list").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };

        vm.openPostDetail = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/business-profile/post-detail-modal/post-detail-modal.html',
                size: size,
                appendTo: parentElem
            });
        };

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
