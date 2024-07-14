const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // ('#email-login') for username login
  // ('.login-form') for event listener
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser 
      document.location.replace('/dashboard');
    } else {
      alert('User name or email not found');
    }
  }
};

// line 8 of login.handlebars
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  // ('#name-signup') for username sign up
  // ('#email-signup') for username sign up
  // ('.signup-form') for event listener
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Error!!! Unable to sign up new user!');
    }
  }
};
  
// line 8 of login.handlebars
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  // line 30 of signup.handlebars
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
