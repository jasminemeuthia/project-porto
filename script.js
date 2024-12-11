document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle the nav menu on mobile
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // IntersectionObserver untuk animasi scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));

  // Modal functionality
  const skillBubbles = document.querySelectorAll('.skill-bubble');
  const modal = document.getElementById('skill-description-modal');
  const modalTitle = document.getElementById('skill-title');
  const modalDescription = document.getElementById('skill-description');
  const closeBtn = document.querySelector('.close-btn');

  // Skill descriptions
  const skillsInfo = {
    "sosialisasi": {
      title: "Sosialisasi",
      description: "Memiliki pengalaman berbicara di depan umum, mampu bersosialisasi dengan mudah di lingkungan baru."
    },
    "organisasi": {
      title: "Organisasi",
      description: "Memiliki pengalaman aktif dalam berorganisasi dan bekerjasama dalam tim, masuk ke dalam OSIS SMK Wikrama Bogor, Anggota Forum OSIS Jawa Barat (FOJB), dan Anggota Forum Komunikasi OSIS Bogor (FKOB)."
    },
    "html-css": {
      title: "HTML/CSS",
      description: "Mampu membuat web page setidaknya dari HTML dan CSS. cth : portofolio ini."
    },
    "bilingual": {
      title: "Berbahasa",
      description: "Saya mampu berkomunikasi dan menulis dengan bahasa Inggris dan Arab."
    }
  };

  skillBubbles.forEach(bubble => {
    bubble.addEventListener('click', (e) => {
      const skillId = e.target.id;
      const skillData = skillsInfo[skillId];

      modalTitle.textContent = skillData.title;
      modalDescription.textContent = skillData.description;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Scroll effect for nav bar background change
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.querySelector('header').classList.add('scrolled');
    } else {
      document.querySelector('header').classList.remove('scrolled');
    }
  });
});
