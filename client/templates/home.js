Template.home.onCreated(function() {
    console.log('Created the home template');
});

Template.home.onRendered(function() {
    console.log('Rendered the home template');
});

Template.home.onDestroyed(function() {
    console.log('Destroyed the home template');
});

Template.home.helpers({
    postsList: function() {
        return [{
            title: 'My Second entry',
            description: 'A very unique blend of mystery and comedy',
            author: 'Kaben Naby',
            timeCreated: moment().subtract(3, 'days').unix()
        }, {
            title: 'My First entry',
            description: 'A horror story with no foreseeable end',
            author: 'Kaben Naby',
            timeCreated: moment().subtract(7, 'days').unix()
        }];
    }
});
