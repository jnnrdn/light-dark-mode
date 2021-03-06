const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`
  image2.src = `img/undraw_feeling_proud_${color}.svg`
  image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

function toggleDarkLightMode(mode) {
  var isDark = mode === DARK_THEME ? mode : false
  var navBkgColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
  var txtBoxBkgColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
  var toggleText = isDark ? 'Dark Mode' : 'Light Mode'
  var toggleIconRemove = isDark ? 'fa-sun' : 'fa-moon'
  var toggleIconAdd = isDark ? 'fa-moon' : 'fa-sun'

  nav.style.backgroundColor = `${navBkgColor}`
  textBox.style.backgroundColor = `${txtBoxBkgColor}`
  toggleIcon.children[0].textContent = `${toggleText}`
  toggleIcon.children[1].classList.replace(
    `${toggleIconRemove}`,
    `${toggleIconAdd}`
  )
  isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME)
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME)
    localStorage.setItem('theme', DARK_THEME)
    toggleDarkLightMode(DARK_THEME)
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME)
    localStorage.setItem('theme', LIGHT_THEME)
    toggleDarkLightMode(LIGHT_THEME)
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true
    toggleDarkLightMode(true)
  }
}
