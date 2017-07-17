'use strict';

angular.
module('peerUp').
component('communityYearEnrollment', {
    templateUrl: 'pages/community-year-enrollment/community-year-enrollment.html',
    controllerAs: 'vm',
    controller: function communityYearEnrollmentComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
