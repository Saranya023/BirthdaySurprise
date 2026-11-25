function openSurprise() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    const music = document.getElementById("backgroundMusic");
    music.play().catch(() => {
        console.log("Tap again to enable background music.");
    });

    window.scrollTo(0, 0);
}

function showLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

// Birthday countdown: November 26
function updateCountdown() {
    const now = new Date();
    let birthday = new Date(now.getFullYear(), 10, 26);

    if (now > birthday && now.toDateString() !== birthday.toDateString()) {
        birthday = new Date(now.getFullYear() + 1, 10, 26);
    }

    if (now.toDateString() === birthday.toDateString()) {
        document.getElementById("countdown").innerHTML =
            "<h2>IT'S YOUR BIRTHDAY CHLM! 🎂❤️</h2>";
        return;
    }

    const difference = birthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 500);

// Final surprise
function celebrate() {
    document.getElementById("surpriseMessage").innerHTML =
        "Surpriseee Nerla va Kudukuran! 🥹❤️<br>" +
        "You are not just my love...<br>" +
        "You are my home, my happiness and my forever! Don't fight with me always 💋<br>" + 
        "Miss u da thangameyyy una pakkanum pola iruku seekram vandhuru 🥹❤️<br>" +
        "Forever & Always — Sara 🩷";

    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
}