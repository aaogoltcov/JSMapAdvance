'use strict'

export class UISettings {
    constructor() {
        this.settings = new Map([
            ["theme", ['dark', 'light', 'gray']],
            ["music", ['trance', 'pop', 'rock', 'chillout', 'off']],
            ["difficulty", ['easy', 'normal', 'hard', 'nightmare']],
        ]);
        this.userSettings = new Map()
    }

    setSettings(paramsList) {
        if (paramsList.length > 0) {
            for (let params of paramsList) {
                let key = Object.keys(params)[0]
                let value = Object.values(params)[0]
                if (this.settings.has(key) && this.settings.get(key).indexOf(value) >= 0) {
                    this.userSettings.set(key, this.settings.get(key).indexOf(value))
                } else {
                    throw new Error('Filled params list is wrong...')
                }
            }
        } else {
            throw new Error('Please fill params list like that: [{"theme": "light"}, {"music": "pop"}]')
        }
    }

    getSettings() {
        let collection = new Map();
        let _this = this;
        this.settings.forEach(function (value, key) {
            if (_this.userSettings.size > 0 && _this.userSettings.has(key)) {
                collection.set(key, value[_this.userSettings.get(key)])
            } else {
                collection.set(key, value[0])
            }
        })
        return collection
    }

}
