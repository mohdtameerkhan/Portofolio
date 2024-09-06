const button = document.querySelectorAll('.tab-links')
const tab_con = document.getElementsByClassName('tab-content')
 

function opentab(tagnae)
{
   for(b of button)
   {
      b.classList.remove('active-link')
   } 
   for(c of tab_con)
      {
         console.log(c)
         c.classList.remove('active-tab')
      } 
      console.log(tagnae)
      event.currentTarget.classList.add('active-link');
      
     console.log( document.getElementById(tagnae))
     document.getElementById(tagnae).classList.add('active-tab')
   }
   // ------Form submission--------------

   const scriptURL = 'https://script.google.com/macros/s/AKfycbztEuhy6JWzU2sM9DBMAdiBtv8X-dFNhIkN8hWUX4VxqZ9KwIbxGkNN0zyC9TfHlWde/exec'
    const form = document.forms['submit-to-google-sheet'];
    const notifi = document.getElementById('msg')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
         
         notifi.innerHTML='Message sent successfully';
         setTimeout(() => {
            notifi.innerHTML='';
         }, 2000)
         form.reset();

        })
        .catch(error => console.error('Error!', error.message))
    })

   //  -------------MENU----------

   let menuba = document.getElementById('menubar');
   let menu_cont = document.querySelector('.list-container')
   menuba.addEventListener('click',()=>
   { 

      menu_cont.classList.toggle('menu_hide');

      
   })

