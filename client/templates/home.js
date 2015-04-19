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
    exampleHelper: function() {
        return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
    }
});

Template.home.helpers({
    dataContextHelper: function() {
        return {
            someText: 'This sentence was set using a helper of the parent template.',
            someNested: {
                text: 'While, this sentence comes from "someNested.text".'
            }
        };
    }
});
