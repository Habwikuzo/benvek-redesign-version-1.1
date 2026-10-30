// Accessible mobile navigation
const menuButton = document.querySelector('.menu-btn');
const navigation = document.getElementById('nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Enquiry form prepares an email draft; it does not submit to a server.
const enquiryForm = document.getElementById('enquiry');
if (enquiryForm) {
  const topicFromUrl = new URLSearchParams(window.location.search).get('topic');
  if (topicFromUrl) {
    const topicSelect = enquiryForm.elements.topic;
    const matchingOption = [...topicSelect.options].find(option => option.text === topicFromUrl);
    if (matchingOption) topicSelect.value = matchingOption.value;
  }
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    const error = document.getElementById('err');
    const name = enquiryForm.elements.name.value.trim();
    const email = enquiryForm.elements.email.value.trim();
    const message = enquiryForm.elements.msg.value.trim();
    if (!name || !enquiryForm.elements.email.validity.valid || !message) {
      error.textContent = 'Please enter your name, a valid email address and project details.';
      return;
    }
    error.textContent = '';
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${enquiryForm.elements.phone.value}\nSolution: ${enquiryForm.elements.topic.value}\n\n${message}`;
    window.location.href = `mailto:hello@benvek.com?subject=${encodeURIComponent('Website enquiry: ' + enquiryForm.elements.topic.value)}&body=${encodeURIComponent(body)}`;
  });
}
