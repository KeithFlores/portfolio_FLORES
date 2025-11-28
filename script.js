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
        bgVideo.play();
        videoToggleBtn.textContent = "Hide Video Background";
        

        header.style.opacity = '0';
        allContent.style.opacity = '0';

    } else {
        bgVideo.pause();
        bgVideo.currentTime = 0;
        body.classList.remove('video-active');
        videoToggleBtn.textContent = "Show Video Background";


        header.style.opacity = '1';
        allContent.style.opacity = '1';
    }
};


videoToggleBtn.addEventListener('click', toggleVideo);
exitVideoBtn.addEventListener('click', toggleVideo);
