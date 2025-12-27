

window.signUp = async function () {
  console.log("Sign Up clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return; 
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful! Check your email.");
  }
};

// LOGIN
window.login = async function () {
  console.log("Login clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return; 
  }

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    alert(error.message);
  } else {
    alert("Login successful!");
    window.location.href = "dashboard.html"

  }
};



