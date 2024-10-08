const logoutFormHandler = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('You are now logged out.');
  }
};

document
  .querySelector('#logout')
  .addEventListener('click', logoutFormHandler);
