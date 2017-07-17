'use strict';

angular.
module('peerUp').
component('communityJobCenter', {
    templateUrl: 'pages/community-job-center/community-job-center.html',
    controllerAs: 'vm',
    controller: function communityJobCenterComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
