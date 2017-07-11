'use strict';

angular.
module('peerUp').
component('registerCommunity', {
    templateUrl: 'pages/register-community/register-community.html',
    controllerAs: 'vm',
    controller: function registerCommunityComponenet() {
        var vm = this;

        vm.openLoginForm = function () {
            $("#register-form").hide();
            $("#login-comm-form").fadeIn();
        };
    }
});
