(function() {
    var getHere = function() {
        return new Date();
    };

    var getThere = function() {
        var now = new Date();
        return new Date(now.getTime() - 12 * 60 * 60 * 1000);
    };

    var getTime = function(now) {
        var hour = now.getHours();
        var minute = now.getMinutes();
        return hour + ':' + minute;
    };

    var getDate = function(now) {
        var month = now.getMonth() + 1;
        var date = now.getDate();
        return month + '/' + date;
    };

    var updateClock = function() {
        var here = getHere();
        var there = getThere();
        $('#here .time').html(getTime(here));
        $('#here .date').html(getDate(here));
        $('#there .time').html(getTime(there));
        $('#there .date').html(getDate(there));
    };

    var fadeInClock = function() {
        var items = [
            $('#here .place'),
            $('#here .time'),
            $('#here .date'),
            $('#there .place'),
            $('#there .time'),
            $('#there .date'),
        ];

        var idx = 0;
        var token = setInterval(function() {
            if(idx >= items.length) {
                clearInterval(token);
                return;
            }
            items[idx].fadeTo('slow', 1);
            ++ idx;
        }, 300);
    };

    updateClock();
    setInterval(updateClock, 5000);
    fadeInClock();
})();

