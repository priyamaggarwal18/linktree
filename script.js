const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link :  " + link+"\nNow you can share my link to your freinds.")
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

    const shareButtons2 = document.querySelectorAll('.share-button')
    console.log(shareButtons2)
    
    shareButtons2.forEach(shareButton =>
        shareButton.addEventListener('click', copyText))
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwDeFcbiRn5RA2c98k5rm-1flhBDQPRwckbbTFQSLj1vxgSUwrjHCUVw_JWkC5NoYWB/exec'
    const form = document.forms['contact-form']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! you will recieve my latest updates on your email :)" ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })