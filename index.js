const timesCounter = document.querySelectorAll('.time')
const daysCounter = document.getElementById('days')
const hoursCounter = document.getElementById('hours')
const minutesCounter = document.getElementById('minutes')
const secondsCounter = document.getElementById('seconds')
const newYearTitle = document.querySelector('.new-year')

timesCounter.forEach((time) => {
	time.classList.add('loading')
})

// times in miliseconds
const ONE_DAY = 1000 * 60 * 60 * 24
const ONE_HOUR = 1000 * 60 * 60
const ONE_MINUTE = 1000 * 60
const ONE_SECOND = 1000

const currentYear = new Date().getFullYear()
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

const updateCounter = () => {
	const today = new Date()
	const diff = newYear - today

	const days = Math.floor(diff / ONE_DAY)
	const hours = Math.floor((diff % ONE_DAY) / ONE_HOUR)
	const minutes = Math.floor((diff % ONE_HOUR) / ONE_MINUTE)
	const seconds = Math.floor((diff % ONE_MINUTE) / ONE_SECOND)

	daysCounter.innerHTML = days
	hoursCounter.innerHTML = hours
	minutesCounter.innerHTML = minutes
	secondsCounter.innerHTML = seconds
}

newYearTitle.innerHTML = currentYear + 1

setInterval(() => updateCounter(), 1000)

setTimeout(() => {
	timesCounter.forEach((time) => {
		time.classList.remove('loading')
	})
}, 2000)
