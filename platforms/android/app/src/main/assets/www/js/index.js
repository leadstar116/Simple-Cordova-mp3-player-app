var play_flag = false;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //cordova.plugins.backgroundMode.enable();
    cordova.plugins.notification.local.schedule({
        id: 100,
        title: 'MP3 Player',
        text: 'Playing test mp3 file...',
        icon: 'https://banner2.kisspng.com/20180205/cve/kisspng-video-sound-play-button-transparent-background-5a78ae778fc5a5.7949515015178584235889.jpg',
        lockscreen: true,
        foreground: true
    });
};

var mp3File = document.getElementById('mp3File');
mp3File.onplay = function () {    
    cordova.plugins.notification.local.schedule({
        id: 100,
        title: 'MP3 Player',
        text: 'Playing test file...',
        icon: 'https://banner2.kisspng.com/20180205/cve/kisspng-video-sound-play-button-transparent-background-5a78ae778fc5a5.7949515015178584235889.jpg',
        lockscreen: true,
        foreground: true
    });        
}
mp3File.onpause = function () {
    cordova.plugins.notification.local.schedule({
        id: 100,
        title: 'MP3 Player',
        text: 'Playing test file...',
        icon: 'https://banner2.kisspng.com/20180404/flw/kisspng-registered-trademark-symbol-service-mark-logo-pause-button-5ac474af426dd1.0357934415228243672721.jpg',
        lockscreen: true,
        foreground: true
    });        
}