Meteor.startup(function() {
    console.log('Server started');

    if (Meteor.users.find().count() === 0) {
        console.log('Create Admin user');

        var userId = Accounts.createUser({
            username: 'therinken',
            email: 'admin@therinken.com',
            password: '1234',
            profile: {
                name: 'Kaben Naby'
            }
        });
        Meteor.users.update(userId, {
            $set: {
                roles: {
                    admin: true
                },
            }
        });
    }
});
