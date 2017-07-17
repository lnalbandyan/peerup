'use strict';

angular.
module('peerUp').
component('communityClassesList', {
    templateUrl: 'pages/community-classes-list/community-classes-list.html',
    controllerAs: 'vm',
    controller: function communityClassesListComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
