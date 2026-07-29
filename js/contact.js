document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for reaching out! Your inquiry has been sent — our legal team will respond shortly.');
  this.reset();
});