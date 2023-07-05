 // Signup form submission handler
 document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form inputs
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Clear error messages
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';
  
    // Validate form inputs
    if (password !== confirmPassword) {
      showError('Passwords do not match');
      return;
    }
  
    // Store user data in local storage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    // Redirect to profile page
    window.location.href = '../../index.html';
  });
  
  // Function to show error message
  function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
  }
  

