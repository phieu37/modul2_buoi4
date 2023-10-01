let slideIndex = 1;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
  if (index < 1) {
    // hiển thị slide cuối
    slideIndex = slides.length;
  } else if (index > slides.length) {
    // quay lại slide đầu tiên
    slideIndex = 1;
  } else {
    // giá trị index đã truyền vào
    slideIndex = index;
  }

  // ẩn
  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // hiện
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(index) {
  showSlides((slideIndex = index));
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 5000); 
}

// Hiển thị slide ban đầu khi tài liệu được tải lên và bật chế độ tự động
showSlides(slideIndex);
autoSlide();
