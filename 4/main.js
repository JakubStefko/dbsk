var bioBody = document.getElementById('bioBody')
var nameSpan = document.getElementById('nameSpan')
var surnameSpan = document.getElementById('surnameSpan')
var emailSpan = document.getElementById('emailSpan')

bioBody.style.visibility = 'visible'

var name = String.fromCharCode(65 + 41, 65 + 32, 65 + 42, 65 + 52, 65 + 33)
var surname = String.fromCharCode(115, 116, 101, 102, 107, 111)
var emailHost = String.fromCharCode(103, 109, 97, 105, 108, 46, 99, 111, 109)
var email =
  name + String.fromCharCode(46) + surname + String.fromCharCode(64) + emailHost

nameSpan.innerHTML = catipalisator(name)
surnameSpan.innerHTML = catipalisator(surname)
emailSpan.innerHTML = email

function catipalisator(string) {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}
