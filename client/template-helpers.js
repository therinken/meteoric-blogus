Template.registerHelper('formatTime', function(time, type) {
    switch (type) {
        case 'fromNow':
            return moment(time).fromNow();
        case 'iso':
            return moment(time).toISOString();
        default:
            return moment(time).format('LLLL');
    }
});
