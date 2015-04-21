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

    if (Posts.find().count() === 0) {
        console.log('Adding dummy posts');
        var dummyPosts = [{
            title: 'My first entry',
            slug: 'my-first-entry',
            description: 'absolute nonsense topped off with a good helping of crap',
            text: 'blah, blah, blah',
            timeCreated: moment().subtract(7, 'days').unix(),
            author: 'Kaben Naby'
        }, {
            title: 'My second entry',
            slug: 'my-second-entry',
            description: 'absolute shit topped off with a good helping of spam',
            text: 'blah, blah, blah',
            timeCreated: moment().subtract(5, 'days').unix(),
            author: 'Kaben Naby'
        }, {
            title: 'My third entry',
            slug: 'my-third-entry',
            description: 'absolute puke topped off with a good helping of snot',
            text: 'blah, blah, blah',
            timeCreated: moment().subtract(3, 'days').unix(),
            author: 'Kaben Naby'
        }, {
            title: 'My fourth entry',
            slug: 'my-fourth-entry',
            description: 'absolute lies topped off with a good helping of fart-juice',
            text: 'blah, blah, blah',
            timeCreated: moment().subtract(2, 'days').unix(),
            author: 'Kaben Naby'
        }, {
            title: 'My fifth entry',
            slug: 'my-fifth-entry',
            description: 'absolute hogwash topped off with a more hogwash',
            text: 'blah, blah, blah',
            timeCreated: moment().subtract(1, 'days').unix(),
            author: 'Kaben Naby'
        }];
        _.each('dummyPosts', function(post) {
            Posts.insert(post);
        });
    }
});
