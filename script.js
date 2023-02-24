const addFade = function (entries, observer) {
    for (let entry of entries) {
        if (!entry.isIntersecting) continue
        if (entry.target.classList.contains("fade-in")) continue
        entry.target.classList.add("fade-in")
    }
}

const options = {
    rootMargin: '0px',
    threshold: 0.1,
}
const observer = new IntersectionObserver(addFade,options)

window.onload = () => {
    let toFade = document.querySelectorAll("h2");
    for (let el of toFade) {
        console.log(el)
        observer.observe(el)
    }
}