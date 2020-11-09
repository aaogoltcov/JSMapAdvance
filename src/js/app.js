'use strict'

import { UISettings } from './map'


let settings = new UISettings()
console.log(settings.getSettings())
settings.setSettings([{"theme": "light"}, {"music": "pop"}])
console.log(settings.getSettings())



