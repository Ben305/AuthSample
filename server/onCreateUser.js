Accounts.onCreateUser(function(options, user) {

    user.profile = {};
    user.profile['name'] = 'sample name';

    return user
});