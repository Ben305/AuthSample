angular
    .module('authSampleApp')
    .controller('mainController', function($scope, $reactive) {
        $reactive(this).attach($scope);

        var vm = this;

        vm.newName = '';

        vm.updateName = function() {
            Meteor.users.update({_id:Meteor.user()._id}, { $set: {'profile.name': vm.newName} });
        };

        vm.autorun(function() {
            if (vm.currentUser) {
                vm.newName = vm.currentUser.profile.name;
            }
        })
});