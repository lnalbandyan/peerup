'use strict';

angular.
module('peerUp').
component('coursesFeed', {
    templateUrl: 'pages/courses-feed/courses-feed.html',
    controllerAs: 'vm',
    controller: function coursesFeedComponenet($uibModal) {
        var vm = this;

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

        vm.openPostDetail = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/business-profile/post-detail-modal/post-detail-modal.html',
                size: size,
                appendTo: parentElem
            });
        };
        vm.openUsersProfile = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/business-profile/users-profile-modal/users-profile-modal.html',
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
