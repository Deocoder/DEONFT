const countdown = () => {
  const countDate = new Date("june 10 , 2023 00:00:00").getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  //how the fuck does time work
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  console.log(day)
  
  // Calculate this shit
  const textDay = Math.floor(gap / day)
  console.log(textDay)
  const textHour = Math.floor ((gap % day) / hour)
  const textMinutes = Math.floor((gap % hour) / minute)
  const textSeconds = Math.floor((gap % minute) / second)

  document.querySelector(".day").innerText = textDay
  document.querySelector(".hour").innerText = textHour
  document.querySelector(".minute").innerText = textMinutes
  document.querySelector(".second").innerText = textSeconds
}

setInterval(countdown , 1000)