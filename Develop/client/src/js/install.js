let deferredPrompt;
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); //prevent the default browswer prompt
    deferredPrompt = event; //store the event
    butInstall.style.display = 'block'; //shows install button
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt(); //shows the browser's install prompt

        const choiceResult = await deferredPrompt.userChoice; //wait for user

        if (choiceResult.outcome === 'accepted') { //user accepts
            console.log('User accepts the PWA installation.');
        } else { //user declines
            console.log('User declines the PWA installation.');
        }

        deferredPrompt = null; //resets
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('The app is installed.');
});
