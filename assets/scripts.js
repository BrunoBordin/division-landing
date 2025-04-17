// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu after clicking a link
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.add('hidden');
      const hamburgerBtn = document.getElementById('hamburger-btn');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
    hamburgerBtn.setAttribute('aria-expanded', isExpanded);
  });
  
  // Copy token address
  document.getElementById('token-address').addEventListener('click', function () {
    const address = this.innerText;
    navigator.clipboard.writeText(address).then(function () {
      const feedback = document.getElementById('copy-feedback');
      feedback.classList.remove('hidden');
      setTimeout(() => {
        feedback.classList.add('hidden');
      }, 1000);
    }).catch(function (error) {
      console.error("Failed to copy address: ", error);
    });
  });