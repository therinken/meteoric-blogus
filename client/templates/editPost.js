Session.setDefault('saveButton', 'Save Post');
Template.editPost.helpers({
    saveButtonText: function() {
        return Session.get('saveButton');
    }
});

Template.editPost.events({
    'submit form': function(e, tmpl) {
        e.preventDefault();
        var form = e.target,
            user = Meteor.user(),
            _this = this;

        if (this._id) {
            Posts.update(this._id, {
                $set: {
                    title: form.title.value,
                    description: form.description.value,
                    text: form.text.value
                }
            }, function(error) {
                if (error) {
                    alert(error.reason);
                } else {
                    Router.go('Post', {
                        slug: _this.slug
                    });
                }
            });
        } else {
            var slug = _.slugify(form.title.value);

            Meteor.call('insertPost', {
                title: form.title.value,
                slug: slug,
                description: form.description.value,
                text: form.text.value
            }, function(error, slug) {
                Session.set('saveButton', 'Save Post');
                if (error) {
                    return alert(error.reason);
                }

                Router.go('Post', {
                    slug: slug
                });
            });
        }
    }
});
