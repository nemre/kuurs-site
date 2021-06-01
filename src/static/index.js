document.getElementById('exitAlert').addEventListener('click', function () {
  document.getElementById('alert').style.display = 'none'
})
var time = 9

var timer = setInterval(function () {
  time = time - 1
  document.getElementById('exitTimer').innerHTML = time + 's'
  if (time == 0) {
    clearInterval(timer)
    document.getElementById('alert').style.display = 'none'
  }
}, 1000)
