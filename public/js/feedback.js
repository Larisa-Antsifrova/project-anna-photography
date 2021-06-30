const feedbackFormRef = document.getElementById("feedback-form");
const feedbackBtnRef = document.getElementById("feedback-btn");

feedbackFormRef.addEventListener("submit", handleFeedbackSubmit);

function handleFeedbackSubmit(event) {
  event.preventDefault();
  console.dir(event.target.elements.email.value);
  console.dir(event.target.elements.date.value);
  console.dir(event.target.elements.message.value);
  console.dir(event.target.elements.photo.checked);
  console.dir(event.target.elements.video.checked);
  console.dir(event.target.elements.button);
}
