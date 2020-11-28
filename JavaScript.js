

const coverImage = document.getElementById('cover-image');
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

function imageListener() {
    expandImage();
    dropElements();
}

 const logo = document.getElementById('logo');

 if (window.matchMedia("(max-width: 770px)").matches) {
    arrow.style.display = 'none';
     coverImage.removeEventListener('click', imageListener);
  }

  if (window.matchMedia("(min-width: 771px)").matches) {
    arrow.addEventListener('mouseenter', () => {
        clearInterval(interval)
        expandImage();
        dropElements();
        setTimeout(() => {
            arrow.style.opacity = "0";
            setTimeout(() => arrow.style.display = "none", 1100)
        }, 1000)
    })
    coverImage.addEventListener('click', imageListener);
    arrow.style.display = "block";
  }

window.addEventListener('resize', () => {
    if (window.innerWidth > 770) {
        coverImage.style.width = "45%"
    }
    if (window.innerWidth > 970) {
        document.getElementById('drop-1').style.display = "block";
        document.getElementById('drop-2').style.display = "block";
        document.getElementById('drop-3').style.display = "block";
        coverImage.addEventListener('click', imageListener);
        arrow.style.display = "block";
        arrow.addEventListener('mouseenter', () => {
            clearInterval(interval)
            expandImage();
            dropElements();
        })
        
}  else if (window.innerWidth <= 770) {
        clearInterval(interval)
        document.getElementById('drop-1').style.display = "none";
        document.getElementById('drop-2').style.display = "none";
        document.getElementById('drop-3').style.display = "none";
        arrow.style.display = 'none';
        coverImage.removeEventListener('click', imageListener);
        coverImage.style.width = "100%"
    }
})


