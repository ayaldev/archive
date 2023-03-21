(function () {
    'use strict';

    var ORDER_DATA = [
        ['Forest Exploration (Recommended)', '2016-08-27', [16]],
        ['Volcanic Caves Exploration (Recommended)', '2016-08-28', [16]],
        ['Desert Exploration (Recommended)', '2016-08-29', [16]],
        ['Tundra Exploration (Recommended)', '2016-08-30', [16]],
        ['S. Tunnels Exploration (Recommended)', '2016-08-31', [16]],
        ['Skyscape Exploration (Recommended)', '2016-09-01', [16]],
        ['Ruins Exploration (Recommended)', '2016-09-02', [16]],
        ['Sanctum Exploration (Recommended)', '2016-09-03', [16]],
        ['Coast Exploration (Recommended)', '2016-09-04', [16]],
        ['Quarry Exploration (Recommended)', '2016-09-05', [16]],
        ['Seabed Exploration (Recommended)', '2016-09-06', [16]],
        ['Shironia Exploration (Recommended)', '2016-09-07', [16]],
        ['Facility Exploration (Recommended)', '2016-09-08', [16]],
        ['Kuron Exploration (Recommended)', '2016-09-09', [16]],
        ['Tokyo Exploration (Recommended)', '2016-08-25', [16]],
        ['Las Vegas Exploration (Recommended)', '2016-08-26', [16]],
        ['Nab Rappy Capture (Recommended)', '2016-04-21', [21]],
        ['Wolgahda Extermination (Recommended)', '2016-04-21', [21]],
        ['Berserk Dragon Suppresion (Recommended)', '2016-04-22', [21]],
        ['Kuronite Suppression (Recommended)', '2016-04-22', [21]],
        ['Subdue Caterdra\'nsa    (Recommended)', '2016-04-23', [21]],
        ['Facility Ecological Survey (Recommended)', '2016-04-23', [21]],
        ['ARKS Search: Tundra (Recommended)', '2016-04-24', [21]],
        ['Subdue Sol Dirandal (Recommended)', '2016-04-24', [21]],
        ['Ruins Infestation Survey (Recommended)', '2016-04-25', [21]],
        ['Vopar Rescue Team (Recommended)', '2016-04-25', [21]],,
        ['Subdue Goronzoran (Recommended)', '2016-04-26', [21]],
        ['Phantom Repulsion: Tokyo (Recommended)', '2016-04-26', [21]],
        ['Mech Power Survey: Tunnels (Recommended)', '2016-04-27', [21]],
        ['Anjhadu-lili Demolition (Recommended)', '2016-04-27', [21]],
        ['Distress Signal Investigation (Recommended)', '2016-04-28', [21]],
        ['Subdue Org Blan (Recommended)', '2016-04-28', [21]],
        ['Rare Ore Mining (Recommended)', '2016-04-29', [21]],
        ['Mobile Fortress Destruction (Recommended)', '2016-04-29', [21]],
        ['Subdue Decol Malluda (Recommended)', '2016-04-30', [21]],
        ['Kuronite Investigation (Recommended)', '2016-04-30', [21]],
        ['Tundra Regional Survey (Recommended)', '2016-05-01', [21]],
        ['Subdue Rheo Madullard (Recommended)', '2016-05-01', [21]],
        ['Cargo Recovery: Desert (Recommended)', '2016-05-02', [21]],
        ['Codotta Idetta Subjugation (Recommended)', '2016-05-02', [21]],
        ['Dagan Extermination: Forest (Recommended)', '2016-05-03', [21]],
        ['Train Ghidoran Suppresion (Recommended)', '2016-05-03', [21]],
        ['Kartargot Extermination (Recommended)', '2016-05-04', [21]],
        ['Mech Power Survey: Desert (Recommended)', '2016-05-04', [21]],
        ['Subdue Za Oodan (Recommended)', '2016-05-05', [21]],
        ['Sanctum Suppression (Recommended)', '2016-05-05', [21]],
        ['Subdue Caterdra\'n (Recommended)', '2016-05-06', [21]],
        ['Lillipan Settlement Defense (Recommended)', '2016-05-06', [21]],
        ['Specimen Collection: Skyscape (Recommended)', '2016-05-07', [21]],
        ['Coastal Conservation (Recommended)', '2016-05-07', [21]],
        ['Subdue Fangulf (Recommended)', '2016-05-08', [21]],
        ['Subdue De Malmoth (Recommended)', '2016-05-08', [21]],
        ['Dragonkin Ecological Survey (Recommended)', '2016-05-09', [21]],
        ['Mech Power Survey: Quarry (Recommended)', '2016-05-09', [21]],
        ['Polluter Destruction (Recommended)', '2016-05-10', [21]],
        ['Coastal Ecological Survey (Recommended)', '2016-05-10', [21]],
        ['Transformer Takedown (Recommended)', '2016-05-11', [21]],
        ['Seabed Ecological Survey (Recommended)', '2016-05-11', [21]],
        ['Defeat: De Malmoth', '2016-04-07', [93]],
        ['Defeat: Zeshrayda(VH)', '2016-03-18', [93]],
        ['Defeat: Goronzoran(VH)', '2016-02-05', [30, 42, 21]],
        ['Defeat: Dragon Ex(VH)', '2016-02-04', [33, 18, 18, 24]],
        ['Volcanic Caves Exploration(VH)', '2016-02-06', [5, 46, 17, 25]],
        //['ARKS Search: Tundra(VH)', '2016-02-09', [5, 49, 14, 19, 6]],
        ['Skyscape Exploration(VH)', '2016-02-12', [5, 49, 14, 25]],
        ['Polluter Destruction(VH)', '2016-02-15', [5, 49, 14, 25]],
        ['Ruins Exploration(VH)', '2016-02-21', [2, 49, 18, 24]],
        //['Sanctum Suppression(VH)', '2016-02-05', [39, 4, 8, 42]],
        ['Sanctum Exploration(VH)', '2016-02-08', [39, 6, 1, 47]],
        ['Defeat: Org Blan(VH)', '2016-02-17', [48, 23, 22]],
        ['Defeat: Bal Rodos(VH)', '2016-01-30', [3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]],
        //['Defeat: Vardha Soma(VH)', '2016-02-22', [18, 75]],
        ['Subdue Decol Malluda(VH)', '2016-02-13', [63, 13, 17]],
        ['15式戦車(VH)', '2016-02-10', [18, 18, 18, 18, 21]],
        //['海岸地域生態調査(VH)', '2016-02-24', [2, 49, 14, 28]],
        ['Coast Exploration(VH)', '2016-01-30', [28, 2, 42, 7, 14]],
        ['Mech Power Survey: Quarry(VH)', '2016-03-03', [1, 35, 13, 44]],
        ['Quarry Exploration(VH)', '2016-03-06', [1, 29, 19, 44]],
        //['海底地域生態調査(VH)', '2016-03-09', [4, 20, 25, 44]],
        ['Seabed Exploration(VH)', '2016-01-31', [41, 4, 14, 34]],
        ['Defeat: Rockbear(SH)', '2016-02-05', [54, 39]],
        ['Defeat: Vol Dragon(SH)', '2016-04-03', [26, 67]],
        ['Defeat: Gwanahda(SH)', '2016-02-14', [54, 39]],
        ['Collect: Snow Banther Claws I(SH)', '2016-02-18', [54, 39]],
        ['Defeat: Big Vardha I(SH)', '2016-02-23', [54, 39]],
        ['Defeat: Quartz Dragon(SH)', '2016-02-27', [54, 39]],
        ['Defeat: Zeshrayda(SH)', '2016-03-03', [54, 39]],
        ['Defeat: Dragon Ex(SH)', '2016-01-28', [39, 54]],
        ['Defeat: Bal Rodos(SH)', '2016-02-02', [39, 54]],
        ['Defeat: Blu Ringahda(SH)', '2016-02-06', [39, 54]],
        ['Defeat: Biol Meduna(SH)', '2016-03-04', [17, 76]],
        ['トレイン・ギドラン(SH)', '2016-02-15', [23, 16, 29, 25]],
        ['Forest Exploration(SH)', '2014-09-27', [6, 3, 24, 27, 33]],
        ['Volcanic Caves Exploration(SH)', '2014-08-28', [48, 33, 3, 3, 6]],
        ['Desert Exploration(SH)', '2014-09-03', [3, 3, 15, 15, 57]],
        ['Tundra Exploration(SH)', '2014-08-31', [12, 6, 30, 15, 6, 24]],
        ['S. Tunnels Exploration(SH)', '2014-09-21', [21, 9, 6, 18, 39]],
        ['Skyscape Exploration(SH)', '2014-09-15', [15, 24, 12, 6, 36]],
        ['Ruins Exploration(SH)', '2016-01-31', [15, 15, 24, 18, 21]],
        ['Sanctum Exploration(SH)', '2016-03-04', [15, 9, 3, 21, 45]],
        ['Coast Exploration(SH)', '2016-01-28', [12, 3, 6, 9, 18, 45]],
        ['Quarry Exploration(SH)', '2016-02-21', [15, 33, 6, 3, 36]],
        ['Subdue Decol Malluda(SH)', '2016-02-24', [15, 24, 21, 3, 30]],
        ['Seabed Exploration(SH)', '2016-02-03', [3, 36, 9, 15, 30]]
    ];

    var CycleIter = (function () {
        var klass = function (seq) {
            this._seq = [].concat(seq);
            this._idx = 0;
            return this;
        };

        klass.prototype = {
            next: function () {
                var seq = this._seq,
                    idx = this._idx,
                    ret = seq[idx];
                this._idx = ++idx < seq.length ? idx : 0;
                return ret;
            }
        };

        return klass;
    }());

    var DateUtil = (function () {
        var _copy = function (date) {
            return new Date(date.valueOf());
        };

        var _trimTime = function (date) {
            date = _copy(date);
            date.setHours(0, 0, 0, 0);
            return date;
        };

        var _addDays = function (date, days) {
            date = _copy(date);
            date.setDate(date.getDate() + days);
            return date;
        };

        return {
            copy: _copy,
            trimTime: _trimTime,
            addDays: _addDays
        };
    }());

    var DateCalculator = (function () {
        var klass = function (start, freqs) {
            this._date = DateUtil.trimTime(start);
            this._freqs = new CycleIter(freqs);
            return this;
        };

        var _i2s = function (num, leng) {
            var num = num.toString(),
                digits = [num];
            for (var i = num.length; i < leng; ++i) {
                digits.unshift('0');
            }
            return digits.join('');
        };

        klass.prototype = {
            date: function () {return DateUtil.copy(this._date)},
            toDateString: function () {
                var date = this._date;
                return [_i2s(date.getFullYear(), 4),
                        _i2s(date.getMonth() + 1, 2),
                        _i2s(date.getDate(), 2)
                       ].join('-');
            },
            next: function () {
                this._date = DateUtil.addDays(this._date, this._freqs.next());
                return this;
            }
        };

        return klass;
    }());

    var OrderResults = (function () {
        var klass = function (begin, end) {
            var result = {};
            if (begin && end) {
                var dc = new DateCalculator(begin, [1]);
                for (; dc.date() < end; dc.next()) {
                    result[dc.toDateString()] = [];
                }
            }
            this._result = result;
            return this;
        };

        klass.prototype = {
            push: function (date, order) {
                var result = this._result,
                    orders = result[date];
                if (!orders) {
                    orders = [];
                    result[date] = orders;
                }
                orders.push(order);
                return this;
            },
            forEach: function (callback) {
                var result = this._result;
                Object.keys(result).sort().forEach(function (date) {
                    callback(date, result[date]);
                });
                return this;
            }
        };

        return klass;
    }());

    var TextConsole = (function () {
        var klass = function ($this) {
            this._$ = $this;
            return this;
        };

        klass.prototype = {
            clear: function () {this._$.text('')},
            print: function (s) {this._$.text(this._$.text() + s)},
            println: function (s) {this.print(s + '\n')}
        };

        return klass;
    }());

    var Forecast = (function () {
        var _FORECAST_DAYS = 10;

        var klass = function ($this) {
            var self = this;
            ['forward', 'backward'].forEach(function (name) {
                var $button = $this.find('.forecast-' + name),
                    handler = self['on' + _capitalize(name)];
                $button.click(function () {handler.call(self)});
                $button.focus(function () {$(this).blur()});
            });
            this._out = new TextConsole($this.find('.forecast-output'));
            this._base = DateUtil.trimTime(new Date());
            this._offset = 0;
            this.update();
            return this;
        };

        var _capitalize = function (s) {
            return s.replace(/\b[a-z]/g, function (s) {
                return s.toUpperCase();
            });
        };

        klass.prototype = {
            onForward: function () {this.next(_FORECAST_DAYS)},
            onBackward: function () {this.next(-_FORECAST_DAYS)},
            next: function (days) {
                this._offset += days;
                this.update();
            },
            update: function () {
                var begin = DateUtil.addDays(this._base, this._offset),
                    end = DateUtil.addDays(begin, _FORECAST_DAYS),
                    results = new OrderResults(begin, end);
                ORDER_DATA.forEach(function (data) {
                    var order = data[0],
                        dc = new DateCalculator(data[1], data[2]);
                    for (; dc.date() < begin; dc.next()) {
                    }
                    for (; dc.date() < end; dc.next()) {
                        results.push(dc.toDateString(), order);
                    }
                });
                var out = this._out;
                out.clear();
                results.forEach(function (date, orders) {
                    out.println(date + ':');
                    orders.forEach(function (order) {
                        out.println('  ' + order);
                    });
                });
            }
        };

        return klass;
    })();

    new Forecast($('#forecast'));
})();
