import { UISettings } from '../map'
import {test} from "@jest/globals";

test('should default setting', () => {
    let settings = new UISettings()
    expect(Array.from(settings.getSettings())).toEqual([
        ["theme", "dark"],
        ["music", "trance"],
        ["difficulty", "easy"],
    ])
})

test('should should be params mistake', () => {
    let settings = new UISettings()
    expect(function () {
        settings.setSettings([])
    }).toThrow(new Error('Please fill params list like that: [{"theme": "light"}, {"music": "pop"}]'))
})

test('should should be filled params mistake', () => {
    let settings = new UISettings()
    expect(function () {
        settings.setSettings([{"foo": "foo"}])
    }).toThrow(new Error('Filled params list is wrong...'))
})

test('should user setting', () => {
    let settings = new UISettings()
    settings.setSettings([{"theme": "light"}, {"music": "pop"}])
    expect(Array.from(settings.getSettings())).toEqual([
        ["theme", "light"],
        ["music", "pop"],
        ["difficulty", "easy"],
    ])
})

