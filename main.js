Accounts.config({
    forbidClientAccountCreation: true
});
if (Meteor.isClient) {
    Meteor.subscribe('userRoles');
}
if(Meteor.isClient){
    timer = new ReactiveTimer();
    timer.start(10);
}
