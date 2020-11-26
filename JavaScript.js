

const cookies = document.getElementById('cookies');
const coverImage = document.getElementById('cover-image');

cookies.addEventListener('click', () =>
    {cookies.style.display = "none"
    coverImage.style.display = "block"})

coverImage.addEventListener('click', () => {
    coverImage.style.display = "none"
    cookies.style.display = "block"
}
)