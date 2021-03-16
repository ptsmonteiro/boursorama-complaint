document.body.style.border = "5px solid red";

const location = 'https://clients.boursorama.com/contact/nous-contacter/3184800089#email'

const textSelector = '#SendEmailType_message'
const radioSelector = 'label[for="SendEmailType_existingRequest_0"]'
const submitSelector = '#SendEmailType_submit'

function fillForm() {
  const text = document.querySelector(textSelector)
  text.value = message

  const radio = document.querySelector(radioSelector)
  radio.click()

  const submit = document.querySelector(submitSelector)
}

if (!document.querySelector(submitSelector)) {
  window.location.href=location
}
fillForm()
