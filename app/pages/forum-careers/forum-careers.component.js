'use strict';

angular.
module('peerUp').
component('forumCareers', {
    templateUrl: 'pages/forum-careers/forum-careers.html',
    controllerAs: 'vm',
    controller: function forumCareersComponenet($uibModal ) {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '80px'});
        }

    }
});
