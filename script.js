const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.card');

const visibleCards = 3; // Number of cards visible at once
const totalCards = cards.length;
let currentIndex = 0;
let cardWidth = cards[0].offsetWidth + 20; // 20px gap

// Clone first few cards for seamless looping
for (let i = 0; i < visibleCards; i++) {
  const clone = cards[i].cloneNode(true);
  track.appendChild(clone);
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Reset to start after reaching the cloned cards
  if (currentIndex === totalCards) {
    setTimeout(() => {
      track.style.transition = 'none';
      currentIndex = 0;
      track.style.transform = `tralateX(20px)`;
    }, 500);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    // Jump to cloned cards instantly
    track.style.transition = 'transform .5s ease';
    currentIndex = totalCards;
    track.style.transform = `translateX(20px)`;

    // Then move to the actual last card with transition
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease';
      currentIndex = totalCards - 1;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 20);
  } else {
    currentIndex--;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
