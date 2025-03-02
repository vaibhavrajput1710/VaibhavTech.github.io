// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Change Navbar Color on Scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#444';
    } else {
      header.style.backgroundColor = '#333';
    }
  });
  
  // Scroll to Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = '↑';
  scrollToTopButton.id = 'scrollToTop';
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.borderRadius = '5px';
  scrollToTopButton.style.backgroundColor = '#333';
  scrollToTopButton.style.color = 'white';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.cursor = 'pointer';
  scrollToTopButton.style.display = 'none'; // Hide initially
  document.body.appendChild(scrollToTopButton);
  
  // Show Scroll to Top Button on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to Top Functionality
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  