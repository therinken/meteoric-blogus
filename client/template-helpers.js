Template.registerHelper('formatTime', function(time, type) {
    time.tick();

    switch (type) {
        case 'fromNow':
            return moment.unix().fromNow();
        case 'iso':
            return moment.unix().toISOString();
        default:
            return moment.unix().format('LLLL');
    }
});
