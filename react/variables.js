export var themeUrl = window.ajaxUrl.themeURL
export var assetsUrl = themeUrl + '/assets/'
export var imgUrl = assetsUrl + 'images/'

let pattern = [0, 1, 2, 1, 2, 0, 2, 0, 1]

let colors = ['lightgrey', 'green', 'darkgrey']

export let patternColor = pattern.map((val, i, arr) => (colors[val]))