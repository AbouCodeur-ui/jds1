
document.addEventListener('DOMContentLoaded', function () {
  gsap.to('#preloader', {
    delay: 2,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    onComplete: () => {
      document.getElementById('preloader').style.display = 'none';
    }
  });
});

