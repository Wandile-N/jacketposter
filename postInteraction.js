document.getElementById('jacketForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const story = document.getElementById('story').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();

  if (!story || !whatsapp) {
    alert('Please fill out all fields!');
    return;
  }

  fetch('submit_application.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `story=${encodeURIComponent(story)}&whatsapp=${encodeURIComponent(whatsapp)}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Show thank-you message
      document.getElementById('thankYouMsg').style.display = 'block';
      // Launch confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Reset form
      document.getElementById('jacketForm').reset();
      // Show alert
      setTimeout(() => {
        alert("Your application has been submitted! You may now close this tab and wait to be chosen 😂🫱🏾‍🫲🏼");
      }, 500);
    } else {
      alert('Error: ' + (data.message || 'Submission failed.'));
    }
  })
  .catch(error => alert('Network error: ' + error));
});
