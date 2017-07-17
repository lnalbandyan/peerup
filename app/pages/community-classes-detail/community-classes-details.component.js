'use strict';

angular.
module('peerUp').
component('communityClassesDetails', {
    templateUrl: 'pages/community-classes-detail/community-classes-details.html',
    controllerAs: 'vm',
    controller: function communityClassesDetailsComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }


    }
});
