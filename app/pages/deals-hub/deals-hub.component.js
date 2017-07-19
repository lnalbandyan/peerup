'use strict';

angular.
module('peerUp').
component('dealsHub', {
    templateUrl: 'pages/deals-hub/deals-hub.html',
    controllerAs: 'vm',
    controller: function dealsHubComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '66px'});
        }
    }
});
