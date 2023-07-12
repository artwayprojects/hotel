import flatpickr from 'flatpickr'

import 'flatpickr/dist/themes/dark.css'
import './styles/scss/flatpickr.scss'

// datepicker init
flatpickr('.btn-date', {
    onChange: (_value, _valueString, config) =>
        config.input.classList.remove('invalid'),
})

const locationDropdown = document.querySelector('#location-dropdown')
const submitBtn = document.querySelector('.btn-submit')
const select = locationDropdown.querySelector('.select')
const caret = locationDropdown.querySelector('.caret')
const menu = locationDropdown.querySelector('.select-menu')
const options = locationDropdown.querySelectorAll('.select-menu li')
const selected = locationDropdown.querySelector('.selected')

locationDropdown.addEventListener('click', () => {
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('select-menu-open')
    locationDropdown.classList.toggle('active')
})

// handle menu options in custom select
options.forEach((option) => {
    option.addEventListener('click', () => {
        selected.value = option.innerText
        select.classList.remove('select-clicked')
        caret.classList.remove('caret-rotate')
        selected.classList.remove('invalid')
        options.forEach((option) => {
            option.classList.remove('active')
        })

        option.classList.add('active')
    })
})

// validation
submitBtn.addEventListener('click', () => {
    const locationField = document.getElementById('location')
    const checkInField = document.getElementById('check-in')
    const checkOutField = document.getElementById('check-out')

    const validLocation = locationField.value
    const validCheckIn = checkInField.value
    const validCheckOut = checkOutField.value

    if (validLocation) {
        locationField.classList.remove('invalid')
    } else {
        locationField.classList.add('invalid')
    }

    if (!validCheckIn) {
        checkInField.classList.add('invalid')
    }

    if (!validCheckOut) {
        checkOutField.classList.add('invalid')
    }

    if (validLocation && validCheckIn && validCheckOut) {
        alert('Form submitted successfully')
    }
})
