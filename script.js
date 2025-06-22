// Kalkulator Laba
function hitungLaba() {
    const input = document.getElementById("investment").value;
    const laba = input * 0.024 * 180; // Contoh: 2.4% daily untuk 180 hari
    document.getElementById("hasil").innerHTML = 
      `Laba 180 Hari: <span>Rp ${laba.toLocaleString('id-ID')}</span>`;
  }
  
  // Animasi Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Tombol Salin Link Afiliasi
  function salinLink() {
    const link = "https://chaintery.com/pages/undang?code=ZEUSPC";
    navigator.clipboard.writeText(link);
    alert("Link afiliasi disalin! 🎉");
  }

  // Countdown Timer (24 jam dari waktu akses)
function startCountdown() {
  const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 jam dari sekarang

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = endTime - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("promo-text").innerHTML = "Promo telah berakhir!";
      document.querySelector(".countdown").style.display = "none";
    }
  }, 1000);
}

// Panggil fungsi saat halaman dimuat
window.onload = startCountdown;

// Animasi Partikel
document.addEventListener('DOMContentLoaded', function() {
  const particles = document.querySelector('.particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 5 + 2}px;
      height: ${Math.random() * 5 + 2}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 5}s linear infinite;
    `;
    particles.appendChild(particle);
  }
});

function hitungLaba() {
  // ... kode hitung sebelumnya ...
  
  // Animasi Tombol
  const btn = document.querySelector('.hitung-btn');
  btn.classList.add('click-effect');
  setTimeout(() => btn.classList.remove('click-effect'), 300);
  
  // Notifikasi
  const hasilElement = document.getElementById("hasil");
  hasilElement.style.animation = 'fadeIn 0.5s';
  setTimeout(() => hasilElement.style.animation = '', 500);
}
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero-bg');
  const scrollY = window.scrollY;
  hero.style.transform = `translateY(${scrollY * 0.3}px)`;
});

// Generate random data
function generateRandomData() {
  const digits = Math.floor(100000 + Math.random() * 900000);
  const visibleDigits = String(digits).substring(0, 2);
  const vipLevel = `VIP${Math.floor(1 + Math.random() * 7)}`;
  const ebtNumber = Math.floor(1000 + Math.random() * 9000);

  const amounts = [
      `Rp${Math.floor(100000 + Math.random() * 400000).toLocaleString('id-ID')}`,
      `Rp${Math.floor(1000000 + Math.random() * 2000000).toLocaleString('id-ID')}`,
      `Rp${Math.floor(1 + Math.random() * 10).toLocaleString('id-ID')}.000.000`
  ];

  const testimonialAmount = `Rp${Math.floor(500000 + Math.random() * 9500000).toLocaleString('id-ID')}`;
  const testimonialDays = Math.floor(7 + Math.random() * 24); // 7–30 hari
  const testimonialText = `Berhasil menarik ${testimonialAmount} dalam ${testimonialDays} hari!`;

  document.querySelector('.ebt4dg').textContent = ebtNumber;

  return {
      memberId: `EBT-${visibleDigits}${String(digits).substring(2)}`,
      vipLevel,
      amounts,
      testimonialText
  };
}

// Update slide with random data
function updateSlide() {
  const data = generateRandomData();
  
  document.querySelector('.hidden-digits').textContent = data.memberId.substring(5,7);
  document.querySelector('.vip-level').textContent = data.vipLevel;
  
  
  const amountElements = document.querySelectorAll('.random-amount');
  amountElements.forEach((el, i) => {
    el.textContent = data.amounts[i];
  });
  
  document.querySelector('.highlight-amount').textContent = data.testimonialText;
}

// Auto slide
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
  updateSlide();
}

// Jalankan setiap 5 detik
setInterval(() => showSlide(currentSlide + 1), 5000);

// Inisialisasi
updateSlide();