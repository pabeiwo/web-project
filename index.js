const baidu = document.querySelector('.baidu')
baidu && baidu.addEventListener('click', function(event) {
  if (event.target.nodeName === 'A') {
    var password = event.currentTarget.querySelector('input')
    password.select()
    document.execCommand('copy')
  }
})
