document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const pw = signupForm.querySelectorAll('input[type="password"]');
      if (pw[0] && pw[1] && pw[0].value !== pw[1].value) {
        alert('Passwords do not match. Please try again.');
        return;
      }
      alert('Account successfully created! Please login.');
      window.location.href = 'login.html';
    });
  }
});
