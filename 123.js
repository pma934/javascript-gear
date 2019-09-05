function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = setTimeout(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = setTimeout(loop)
}

let a = 0
setInterval(timer => {
  console.log(1)
  a++
  if (a === 3) clearTimeout(timer)
}, 1000)