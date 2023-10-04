let element1 = document.getElementById('service-card1')
let element2 = document.getElementById('service-card2')
let element3 = document.getElementById('service-card3')
let elementHeight = element1.clientHeight;
document.addEventListener('scroll', animate)

function animate() {
    if (inView()) {
        element1.classList.add('animate-service-card')
        setTimeout(() => {
            element2.classList.add('animate-service-card')
        }, 100);
        setTimeout(() => {
            element3.classList.add('animate-service-card')
        }, 200);
    }
}

function inView() {
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY
    let scrollPosition = scrollY + windowHeight;
    let elementPosition = element1.getBoundingClientRect().top + scrollY + elementHeight;
    if (scrollPosition > elementPosition) {
        return true
    }
    return false
}