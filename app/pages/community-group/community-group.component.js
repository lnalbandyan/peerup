'use strict';

angular.
module('peerUp').
component('communityGroup', {
    templateUrl: 'pages/community-group/community-group.html',
    controllerAs: 'vm',
    controller: function communityGroupComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
