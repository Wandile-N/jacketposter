document.getElementById("jacketForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const story = document.getElementById("story").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  if (!story || !whatsapp) {
    alert("Please fill in both fields. Your story matters and so does your WhatsApp number!");
    return;
  }

  // Simulate form submission
  console.log("Story:", story);
  console.log("WhatsApp:", whatsapp);

  document.getElementById("jacketForm").style.display = "none";
  document.getElementById("thankYouMsg").style.display = "block";
});
