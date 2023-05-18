console.log('this is footer.js for desktop browser');

// push notification - footer
const push_notify = document.getElementById('push_notify');
push_notify.addEventListener('click', function (event) {
    
    // push notification will hide itself if click event
    this.classList.add('hidden');


}); // click push notification