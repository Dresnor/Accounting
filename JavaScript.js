

const cookies = document.getElementById('cookies');
const coverImage = document.getElementById('cover-image');

// cookies.addEventListener('click', () =>
//     {cookies.style.display = "none"
//     coverImage.style.display = "block"
// })

// coverImage.addEventListener('click', () => {
//     coverImage.style.display = "none"
//     cookies.style.display = "block"
// })

const arrow = document.getElementById('arrow');

let interval = setInterval(() => {
    arrow.classList.toggle('flash');
}, 1600)

function expandImage() {
    coverImage.style.width = "53%"
    setTimeout(() => {
        coverImage.style.transition = "3s"
        coverImage.style.width = "45%"
    },6000)
}

const drop1 = document.getElementById('drop-1')
const drop2 = document.getElementById('drop-2')
const drop3 = document.getElementById('drop-3')

function dropElements() {
    drop1.classList.add('drop-1-end')
    drop2.classList.add('drop-2-end')
    drop3.classList.add('drop-3-end')
}

arrow.addEventListener('mouseenter', () => {
    clearInterval(interval)
    expandImage();
    dropElements();
}
)

coverImage.addEventListener('click', () => {
    expandImage();
    dropElements();
 })