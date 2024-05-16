const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#new-username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#new-password").value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler)