angular
    .module('authSampleApp')
    .controller('headerController', function($scope, $reactive) {
        $reactive(this).attach($scope);

        var vm = this;

        vm.profileName = '';

        vm.autorun(function() {
            if (vm.currentUser) {
                vm.profileName = vm.currentUser.profile.name;
            }
        })
    });