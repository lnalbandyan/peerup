'use strict';

angular.
module('peerUp').
component('home', {
    templateUrl: 'pages/home/home.html',
    controllerAs: 'vm',
    controller: function homeComponenet($uibModal) {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '68px'});
        }
        vm.moreNews = function(e){
            var txt = $(".hidden-news").is(':visible') ? 'View More' : 'Hide News';
            $(".view-more-news a span").text(txt);
            $(e.target).toggleClass("active");
            $(".hidden-news").slideToggle();
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

        vm.shareStoryLink = function (e) {
            $(".create-post, .brain-map, .ask-question, .create-poll").hide();
            $(".share-story").fadeIn();
            $(".post-action li").removeClass("active");
            $(this).closest("li").addClass("active");
        };

        vm.openPostDetail = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/home/post-detail-modal/post-detail-modal.html',
                size: size,
                appendTo: parentElem
            });
        };
        vm.openShare = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/home/share-modal/share-modal.html',
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

        vm.openInvite = function (size) {
            var parentElem = angular.element('body');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'pages/home/invite-modal/invite-modal.html',
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
