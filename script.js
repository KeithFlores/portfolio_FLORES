const themeToggleBtn = document.getElementById('theme-toggle');
const videoToggleBtn = document.getElementById('video-toggle');
const bgVideo = document.getElementById('bg-video');
const body = document.body;
const header = document.querySelector('header');
const allContent = document.querySelector('.all');


const exitVideoBtn = document.getElementById('exit-video-btn'); 


themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});


const toggleVideo = () => {
    if (!body.classList.contains('video-active')) {
        body.classList.add('video-active');
        bgVideo.style.opacity = '1';
        bgVideo.play(); 
        videoToggleBtn.textContent = "Hide Video Background";

        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
        allContent.style.opacity = '0';
        allContent.style.pointerEvents = 'none';

    } else {
        body.classList.remove('video-active');
        bgVideo.pause();
        bgVideo.currentTime = 0;
        bgVideo.style.opacity = '0';
        videoToggleBtn.textContent = "An inspirational video for future successful programmers";

        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
        allContent.style.opacity = '1';
        allContent.style.pointerEvents = 'auto';
    }
};


videoToggleBtn.addEventListener('click', toggleVideo);
if (exitVideoBtn) exitVideoBtn.addEventListener('click', toggleVideo);
