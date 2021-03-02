window.onload = function() {
    const container = document.querySelector('.container')
    const card = document.querySelector('.card')
    const title = document.querySelector('.title')
    const description = document.querySelector('.info h3')
    const sneaker = document.querySelector('.sneaker img')
    const purchase = document.querySelector('.purchase button')
    const sizes = document.querySelector('.sizes')

    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10
        let yAxis = (window.innerHeight / 2 - e.pageY) / 10
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        title.style.transform = 'translateZ(50px)'
        sneaker.style.transform = 'translateZ(150px) rotateZ(30deg)'
        description.style.transform = 'translateZ(50px)'
        purchase.style.transform = 'translateZ(50px)'
    })

    container.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none'
    })

    container.addEventListener("mouseleave", (e) => {
        card.style.transition = 'all 0.5s ease'
        card.style.transform = 'rotateY(0deg) rotateX(0deg)'
        title.style.transform = 'translateZ(0px)'
        sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
        description.style.transform = 'translateZ(0px)'
        purchase.style.transform = 'translateZ(0px)'
    })

}