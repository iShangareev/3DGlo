const validator = () => {
  const inputs = document.querySelectorAll('.calc-item:not(:first-child)')
  const names = document.querySelectorAll('input[name="user_name"]')
  const emails = document.querySelectorAll('input[name="user_email"]')
  const textarea = document.querySelector('.mess')
  const phones = document.querySelectorAll('input[type="tel"]')


  inputs.forEach(input => input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/,"")
  }))

  names.forEach(name => name.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "")
  }))
  textarea.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "")
  })

  emails.forEach(email => email.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\w@_\-.!~*']+/, "")
  }))

  phones.forEach(phone => phone.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d()-]+/, "")
  }))

}

export default validator
