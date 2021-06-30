const feedbackFormRef = document.getElementById("feedback-form");
const feedbackBtnRef = document.getElementById("feedback-btn");

feedbackFormRef.addEventListener("submit", handleFeedbackSubmit);

async function handleFeedbackSubmit(event) {
  event.preventDefault();

  const requestBody = {
    name: event.target.elements.name.value,
    email: event.target.elements.email.value,
    message: event.target.elements.message.value,
    date: event.target.elements.date.value,
    photo: event.target.elements.photo.checked,
    video: event.target.elements.video.checked,
  };

  try {
    await fetch("http://localhost:8888/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    feedbackFormRef.reset();
  } catch (error) {
    console.log(error.message);
  }
}
