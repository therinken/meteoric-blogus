Meteor.publish('lazyload-posts', function(limit) {
    return Posts.find({}, {
        limit: limit,
        fields: {
            text: 0
        },
        sort: {
            timeCreated: -1
        }
    });
});
Meteor.publish('single-post', function(slug){
    return Posts.find({
        slug: slug
    });
});
