const themeToggleBtn = document.getElementById('theme-toggle');
const videoToggleBtn = document.getElementById('video-toggle');
const exitVideoBtn = document.getElementById('exit-video-btn');
const bgVideo = document.getElementById('bg-video');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});

const toggleVideo = () => {
    const isActivating = !body.classList.contains('video-active');

    if (isActivating) {
        body.classList.add('video-active');
        bgVideo.muted = false; 
        bgVideo.play();
        videoToggleBtn.textContent = "Hide Video Background";
    } else {
        body.classList.remove('video-active');
        bgVideo.pause();
        bgVideo.currentTime = 0;
        videoToggleBtn.textContent = "An inspirational video for future successful programmers";
    }
};

videoToggleBtn.addEventListener('click', toggleVideo);
if (exitVideoBtn) exitVideoBtn.addEventListener('click', toggleVideo);
