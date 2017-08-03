'use strict';

angular.
module('peerUp').
component('groupFeed', {
    templateUrl: 'pages/group-feed/group-feed.html',
    controllerAs: 'vm',
    controller: function groupFeedComponenet($uibModal) {
        var vm = this;

        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

        vm.addKeyword = function (e) {
            console.log(e);
            $(e.target).hide();
            $(e.target).parent().next('div').addClass('active');
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

        vm.questionLink = function (e) {
            $(".create-post, .brain-map, .create-poll, .timeline-block").hide();
            $(".ask-question, .timeline-block").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };

        vm.brainLink = function (e) {
            $(".create-post, .create-poll, .timeline-block, .ask-question").hide();
            $(".brain-map").fadeIn();
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
