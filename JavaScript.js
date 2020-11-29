

const coverImageContainer = document.getElementById('cover-image-container');
const coverImage = document.getElementById('cover-image')
const arrow = document.getElementById('arrow');
const mobileSliderImage = document.getElementById('mobile-slider-image');

let interval = setInterval(() => {
    arrow.classList.toggle('flash');
}, 1600)

function expandImage() {
    coverImageContainer.style.width = "53%"
    setTimeout(() => {
        coverImageContainer.style.transition = "3s"
        coverImageContainer.style.width = "45%"
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
     coverImageContainer.removeEventListener('click', imageListener);
     setInterval(() => {
        coverImage.classList.toggle('display-none');
        mobileSliderImage.classList.toggle('display-none')
     }, 5000)
  }

  if (window.matchMedia("(min-width: 771px)").matches) {
    arrow.addEventListener('mouseenter', () => {
        clearInterval(interval)
        expandImage();
        dropElements();
        setTimeout(() => {
            arrow.style.visibility = "hidden";
        }, 1000)
    })
    coverImageContainer.addEventListener('click', imageListener);
    arrow.style.display = "block";
  }

window.addEventListener('resize', () => {
    if (window.innerWidth > 770) {
        coverImageContainer.style.width = "45%"
    }
    if (window.innerWidth > 970) {
        document.getElementById('drop-1').style.display = "block";
        document.getElementById('drop-2').style.display = "block";
        document.getElementById('drop-3').style.display = "block";
        coverImageContainer.addEventListener('click', imageListener);
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
        coverImageContainer.removeEventListener('click', imageListener);
        coverImageContainer.style.width = "100%"
    }
})


