'use strict';

angular.
module('peerUp').
component('communityFreshersHome', {
    templateUrl: 'pages/community-freshers-home/community-freshers-home.html',
    controllerAs: 'vm',
    controller: function communityFreshersHomeComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
