navigator.mediaDevices
    .getUserMedia({ 
        audio: true 
    })
    .then(stream => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        analyser.fftSize = 256;
        microphone.connect(analyser);

        const flame = document.querySelectorAll('.flame');
        const textVol = document.querySelector('.volume');
        let isVolumeAbove20 = false;

        function animateFlame() {
            if (isVolumeAbove20) {
                return;
            }

            analyser.getByteFrequencyData(dataArray);
            const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;
            textVol.innerHTML = Math.floor(volume)

            if (volume >= 10) {
                isVolumeAbove20 = true;
                flame.forEach(e => e.remove());
                setInterval(createHeart, 30);

                setTimeout(() => {
                    return window.location.href = "./flower.html"
                }, 5000);
            }

            requestAnimationFrame(animateFlame);
        }

        animateFlame();
    })
    .catch(error => {
        console.log(error);
        
        alert('Please allow microphone access to interact with the candle!');
    });

function createHeart() {
    const heart = document.createElement('div');
    
    heart.classList.add('heart');

    const colors = ['#f16b7b', '#e85a65', '#d94753', '#8b0000'];
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = `${Math.random() * 100}vw`;

    const scale = (Math.random() * (2 - 1) + 1).toFixed(2); // Skala antara -5 dan 5
    heart.style.scale = `${scale}`;

    document.getElementById('container-cake').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}