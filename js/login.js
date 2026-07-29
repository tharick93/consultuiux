// ===== Login flow controller =====
document.addEventListener('DOMContentLoaded', () => {
  // Navigation handler for elements with data-goto
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      const targetId = el.getAttribute('data-goto');
      const targetView = document.getElementById(targetId);
      if (targetView) {
        e.preventDefault();
        // Hide all views
        document.querySelectorAll('[data-view]').forEach(view => {
          view.setAttribute('hidden', '');
        });
        // Show target view
        targetView.removeAttribute('hidden');
        
        // Focus first input of target view if exists
        targetView.querySelector('input')?.focus();
      }
    });
  });

  // Handle Role Selection (User vs Admin)
  const roleBtns = document.querySelectorAll('.role-btn');
  const roleInput = document.getElementById('login-role');
  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedRole = btn.getAttribute('data-role');
      if (roleInput) roleInput.value = selectedRole;
    });
  });

  // Handle login submit
  const loginForm = document.getElementById('view-login');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const role = roleInput ? roleInput.value : 'user';
      if (role === 'admin') {
        window.location.href = 'admin-dash.html';
      } else {
        window.location.href = 'user-dash.html';
      }
    });
  }

  // Handle forgot password submit
  const forgotForm = document.getElementById('view-forgot');
  if (forgotForm) {
    forgotForm.addEventListener('submit', e => {
      e.preventDefault();
      const targetView = document.getElementById('view-otp');
      if (targetView) {
        document.querySelectorAll('[data-view]').forEach(view => view.setAttribute('hidden', ''));
        targetView.removeAttribute('hidden');
        targetView.querySelector('input')?.focus();
      }
    });
  }

  // Auto-advance and reverse OTP inputs
  const otpInputs = document.querySelectorAll('.otp-row input');
  otpInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      if (input.value && otpInputs[i + 1]) {
        otpInputs[i + 1].focus();
      }
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !input.value && otpInputs[i - 1]) {
        otpInputs[i - 1].focus();
      }
    });
  });

  // Handle OTP verify submit
  const otpForm = document.getElementById('view-otp');
  if (otpForm) {
    otpForm.addEventListener('submit', e => {
      e.preventDefault();
      const targetView = document.getElementById('view-reset');
      if (targetView) {
        document.querySelectorAll('[data-view]').forEach(view => view.setAttribute('hidden', ''));
        targetView.removeAttribute('hidden');
        targetView.querySelector('input')?.focus();
      }
    });
  }

  // Handle password reset submit
  const resetForm = document.getElementById('view-reset');
  if (resetForm) {
    resetForm.addEventListener('submit', e => {
      e.preventDefault();
      const pw = resetForm.querySelectorAll('input[type="password"]');
      if (pw[0] && pw[1] && pw[0].value !== pw[1].value) {
        alert('Passwords do not match. Please try again.');
        return;
      }
      const targetView = document.getElementById('view-success');
      if (targetView) {
        document.querySelectorAll('[data-view]').forEach(view => view.setAttribute('hidden', ''));
        targetView.removeAttribute('hidden');
      }
    });
  }
});