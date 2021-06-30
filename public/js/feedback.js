const feedbackFormRef = document.getElementById("feedback-form");
const feedbackBtnRef = document.getElementById("feedback-btn");
const notificationRef = document.getElementById("notification");

feedbackFormRef.addEventListener("submit", handleFeedbackSubmit);

async function handleFeedbackSubmit(event) {
  event.preventDefault();

  const requestBody = {
    name: event.target.elements.name.value,
    email: event.target.elements.email.value,
    message: event.target.elements.message.value,
    date: event.target.elements.date.value || "Not specified",
    photo: event.target.elements.photo.checked,
    video: event.target.elements.video.checked,
  };

  console.log(requestBody);

  try {
    await fetch("http://localhost:8888/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    feedbackFormRef.reset();
    showNotification(notificationRef);
  } catch (error) {
    console.log(error.message);
  }
}

function showNotification(notificationRef) {
  notificationRef.classList.remove("is-hidden");
  setTimeout(() => {
    notificationRef.classList.add("is-hidden");
  }, 3000);
}

function enableButton(buttonRef) {
  buttonRef.removeAttribute("disabled");
}

function disableButton(buttonRef) {
  buttonRef.addAttribute("disabled");
}
