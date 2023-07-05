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
    window.location.href = '';
  });
  
  // Function to show error message
  function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
  }
  


//   login form submission handler



    
const submitBtn = document.querySelector("#loginForm");
const submitForm = (e)=>{
    e.preventDefault() // prevent the submission


const loginEmail = document.getElementById("login-email").value;
const loginPassword = document.getElementById("login-password").value;
    const loginErrorContainer = document.querySelector("#login-errorContainer");
    loginErrorContainer.innerHTML = "";

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if(loginEmail === storedEmail && loginPassword === storedPassword){
        window.location.href = "../index.html";
    }
    else{
        showErrorMsg("Invalid email or Password");
    }
    
}

const showErrorMsg=(message)=>{
    const loginErrorContainer = document.querySelector("#login-errorContainer");
    const errorElement = document.createElement('p');
    errorElement.textContent(message);
    loginErrorContainer.appendChild(errorElement);
}


submitBtn.addEventListener("submit", submitForm(e));




