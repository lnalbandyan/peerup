'use strict';

angular.
module('peerUp').
component('accountSettings', {
    templateUrl: 'pages/account-settings/account-settings.template.html',
    controllerAs: 'vm',
    controller: function accountSettingsComponenet() {
        var vm = this;
        vm.isNewCardOpen = false;

        vm.openEdit = function (e) {
            $(e.target).hide();
            $(e.target).closest("li").find(".setting-value").hide();
            $(e.target).closest("li").find(".edit-field").fadeIn();
            $("#general-action").fadeIn();
            console.log( $(e.target).parent());
        };

        vm.cancelEdit = function () {
            $(".setting-value").show();
            $(".edit-field").hide();
            $("#general-action").hide();
            $(".setting-edit").fadeIn();
        };
    }
});
