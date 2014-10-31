(function() {
    var trip;

    var loadTrip = function(callback) {
        $.get('data/config.json', function(config) {
            var today = getDate(getHere());
            for(var tripName in config.trips) {
                if(today in config.trips[tripName].words) {
                    trip = config.trips[tripName];
                }
            }
            if(typeof trip == typeof undefined) {
                trip = {
                    'here': config.home.place,
                    'there': config.home.place,
                    'timeDiff': 0,
                    'words': {}
                };
                trip.words[today] = config.home.words;
            }
            callback();
        }, 'json');
    };

    var getHere = function() {
        return new Date();
    };

    var getThere = function() {
        var now = new Date();
        var timeDiff = trip.timeDiff;
        return new Date(now.getTime() + timeDiff * 60 * 60 * 1000);
    };

    var getTime = function(now) {
        var hour = now.getHours();
        var minute = now.getMinutes();
        if(minute < 10) {
            minute = '0' + minute;
        }
        return hour + ':' + minute;
    };

    var getDate = function(now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        return year + '/' + month + '/' + date;
    };

    var putPlaces = function() {
        $('#here .place').html(trip.here);
        $('#there .place').html(trip.there);
    };

    var updateClock = function() {
        var here = getHere();
        var there = getThere();
        $('#here .time').html(getTime(here));
        $('#here .date').html(getDate(here));
        $('#there .time').html(getTime(there));
        $('#there .date').html(getDate(there));
    };

    var fadeInAll = function() {
        var items = [
            $('#here .place'),
            $('#here .time'),
            $('#here .date'),
            $('#there .place'),
            $('#there .time'),
            $('#there .date'),
            $('#love-words-title'),
            $('#love-words-content'),
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

    var putLoveWords = function() {
        var today = trip.words[getDate(getHere())];
        $('#love-words-content').html(today);
    };

    loadTrip(function() {
        putPlaces();
        updateClock();
        setInterval(updateClock, 5000);
        putLoveWords();
        fadeInAll();
    });
})();

