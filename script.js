document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      document.getElementById("feedbackResponse").innerText =
        `Thank you, ${name}! Your feedback has been recorded.`;

      // Reset form
      form.reset();
    });
  }
});
