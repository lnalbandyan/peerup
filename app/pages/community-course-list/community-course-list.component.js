'use strict';

angular.
module('peerUp').
component('communityCourseList', {
    templateUrl: 'pages/community-course-list/community-course-list.html',
    controllerAs: 'vm',
    controller: function communityCourseListComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
