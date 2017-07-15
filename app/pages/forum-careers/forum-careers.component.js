'use strict';

angular.
module('peerUp').
component('forumCareers', {
    templateUrl: 'pages/forum-careers/forum-careers.html',
    controllerAs: 'vm',
    controller: function forumCareersComponenet($uibModal ) {
        var vm = this;
        var $sticky = $('.sticky');
        $sticky.css({position: 'fixed', top: '66px'});
    }
});
