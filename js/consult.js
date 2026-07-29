document.getElementById('consultForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your consultation request has been received. We will contact you shortly to confirm your appointment.');
  this.reset();
});