// ADMIN-UPDATED APPLICATION STATUSES
// Update this manually when reviewing applications
const applicationStatuses = {
  "H4TE-123456": "Pending Review",
  "H4TE-234567": "Accepted 🎉",
  "H4TE-345678": "Denied ❌"
};

function checkStatus() {
  const input = document.getElementById("appIDInput").value.trim();
  const result = document.getElementById("statusResult");

  if (!input) {
    result.innerText = ""H4TE-384291": "Accepted 🎉"
.";
    result.style.color = "green";
    return;
  }

  if (applicationStatuses[input]) {
    result.innerText = "Status: " + applicationStatuses[input];
    result.style.color = applicationStatuses[input.includes("Accepted")
      ? "#00ff99"
      : applicationStatuses[input.includes("Denied")
      ? "red"
      : "yellow"];
  } else {
    result.innerText = "Application ID not found.";
    result.style.color = "red";
  }
}
