const button = document.getElementById('scrollButton') 

button.addEventListener('click', () => {
  window.scroll({top: window.innerHeight, behavior: "smooth"})
});


window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
};
