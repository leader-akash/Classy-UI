//   login form submission handler

const submitBtn = document.querySelector("#loginForm");
const submitForm = (event)=>{
    event.preventDefault() // prevent the submission


const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
    const errorContainer = document.querySelector("#errorContainer");
    errorContainer.innerHTML = "";

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if(Email === storedEmail && Password === storedPassword){
        window.location.href = "../../index.html";
    }
    else{
        showErrorMsg("Invalid email or Password");
    }
    
}

const showErrorMsg=(message)=>{
    const errorContainer = document.querySelector("#errorContainer");
    const errorElement = document.createElement('p');
    errorElement.textContent(message);
    errorContainer.appendChild(errorElement);
}


// submitBtn.addEventListener("submit", submitForm(event));

// Login form submission handler
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Retrieve form inputs
//     const loginEmail = document.getElementById("login-email").value;
//     const loginPassword = document.getElementById("login-password").value;
//     // Clear error messages
//     const loginErrorContainer = document.querySelector("#login-errorContainer");
//     loginErrorContainer.innerHTML = '';
  
//     // Retrieve stored user data
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
  
//     // Validate user credentials
//     if (email === storedEmail && password === storedPassword) {
//       // Redirect to profile page
//       window.location.href = 'profile.html';
//     } else {
//       showError('Invalid email or password');
//     }
//   });
  
//   // Function to show error message
//   function showError(message) {
//     const errorContainer = document.getElementById('errorContainer');
//     const errorElement = document.createElement('p');
//     errorElement.textContent = message;
//     errorContainer.appendChild(errorElement);
//   }
  


