Package.describe({
  name: 'meteor-book:reactive-timer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple timer object, which cam re-run reactive functions based on an interval',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/therinken/meteoric-blogus/packages/reactive-timer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('ReactiveTimer.js', 'client');
  api.use('tracker', 'client');
  api.export('ReactiveTimer');
});

Package.onTest(function(api) {
  api.use('tinytest', 'client');
  api.use('meteor-book:reactive-timer', 'client');
  api.addFiles('./packages/tests/tests.js', 'client');
});
