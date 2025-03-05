function nextStep(currentStep) {
  const validation = validateStep(currentStep);
  if (!validation.isValid) {
      document.querySelector(`#step${currentStep} .error-message`).textContent = validation.message;
      return;
  }

  document.querySelector(`#step${currentStep}`).classList.remove("active");
  document.querySelector(`#step${currentStep + 1}`).classList.add("active");
}

function prevStep(currentStep) {
  document.querySelector(`#step${currentStep}`).classList.remove("active");
  document.querySelector(`#step${currentStep - 1}`).classList.add("active");
}

function validateStep(step) {
  let input, message = "", isValid = true;

  if (step === 1) {
      input = document.getElementById("name").value.trim();
      if (input === "") {
          message = "Name is required.";
          isValid = false;
      }
  } else if (step === 2) {
      input = document.getElementById("email").value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input)) {
          message = "Enter a valid email.";
          isValid = false;
      }
  } else if (step === 3) {
      input = document.getElementById("password").value;
      if (input.length < 6) {
          message = "Password must be at least 6 characters long.";
          isValid = false;
      }
  }

  return { isValid, message };
}

document.getElementById("multiStepForm").addEventListener("submit", function (event) {
  if (!validateStep(3).isValid) {
      event.preventDefault();
      document.querySelector("#step3 .error-message").textContent = "Password must be at least 6 characters long.";
  } else {
      alert("Form submitted successfully!");
  }
});
