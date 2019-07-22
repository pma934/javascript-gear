var left = [5]
var right = [6]

var index = 0
var presses = [4, 3, 4]
var keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function press(index, left, right, step) {
  if (index === presses.length) {
    return step
  }
  var key = presses[index]
  var l_left, l_right, l_step, r_left, r_right, r_step
  var l, r
  l_left = [key]
  l_step = Math.min(...(left.map(x => Math.abs(x - key) + 1))) + step
  l_right = keyboard.filter(x => (x > key) && (x >= Math.min(...right) - l_step) && (x <= Math.max(...right) + l_step))
  l = press(index + 1, l_left, l_right, l_step)

  r_right = [key]
  r_step = Math.min(...(right.map(x => Math.abs(x - key) + 1))) + step
  r_left = keyboard.filter(x => (x < key) && (x >= Math.min(...left) - l_step) && (x <= Math.max(...left) + l_step))
  r = press(index + 1, r_left, r_right, r_step)

  return Math.min(l, r)
}

var step = press(0, left, right, 0)

console.log(step)