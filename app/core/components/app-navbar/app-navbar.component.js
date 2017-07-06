'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('core').
    component('appNavbar', {
        templateUrl: 'core/components/app-navbar/app-navbar.template.html',
        controllerAs: 'vm',
        controller: function appNavbarComponent () {
            var vm = this;
            console.log(vm);
        },
        bindings: {
            active: '<'
        }
    });