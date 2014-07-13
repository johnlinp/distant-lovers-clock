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
        if(minute < 10) {
            minute = '0' + minute;
        }
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
        var loveWords = {
            '7/12': 'What I did so far, is only for you.',
            '7/13': 'Always remember, you are mine, and I am yours.',
            '7/14': 'I am leaving, but I will never leave you.',
            '7/15': 'Are you missing me already? Me too.',
            '7/16': "Quebec sucks. I can't find you here.",
            '7/17': 'I hope Brian take care of you.',
            '7/18': 'Happy birthday to your sister and dad!',
            '7/19': 'Wish you were here.',
            '7/20': 'How is our lovely Agogo?',
            '7/21': 'When you sneeze, I am missing you.',
            '7/22': "Wish you a good time in Le Blé d'Or.",
            '7/23': '',
            '7/24': '',
            '7/25': 'Sad five years and seven months, without you here.',
            '7/26': 'Wish you a fantastic dinner with Wify.',
            '7/27': '',
            '7/28': "Je t'aime.",
            '7/29': '',
            '7/30': '',
            '7/31': 'Happy leaving Academia Sinica!',
            '8/1': 'Little Zong Zong baby~',
            '8/2': '',
            '8/3': '',
            '8/4': 'Everything is meaningless without you.',
            '8/5': '',
            '8/6': '',
            '8/7': '',
            '8/8': '',
            '8/9': '',
        };

        $('#love-words-content').html(loveWords[getDate(getHere())]);
    };

    updateClock();
    setInterval(updateClock, 5000);
    putLoveWords();
    fadeInAll();
})();

