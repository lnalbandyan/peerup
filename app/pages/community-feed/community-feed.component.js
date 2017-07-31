'use strict';

angular.
module('peerUp').
component('communityFeed', {
    templateUrl: 'pages/community-feed/community-feed.html',
    controllerAs: 'vm',
    controller: function communityFeedComponenet($uibModal) {
        var vm = this;
        var ctx = document.getElementById('myChart').getContext('2d');
        var data = {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgb(39, 142, 87)',
                        'rgb(220, 48, 48)',
                        'rgb(228, 200, 42)'
                    ]
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            };
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                legend: {
                    display: true,
                    labels: {
                        padding: 25,
                        fontColor: 'rgb(255, 99, 132)'
                    }
                }
            }
        });
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

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
