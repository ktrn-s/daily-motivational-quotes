gsap.from("#container", {
    opacity: 0, scale: 0.8, y: -20, duration: 1.5, ease: "power2.out"
});
gsap.from("#btn", {
    scale: 0.8, rotation: 360, duration: 1.2, ease: "back.out(1.7)"
});
gsap.from("h1", {
    opacity: 0, y: -40, duration: 1
});
gsap.from(".subtitle", {
    opacity: 0, delay: 0.3, y: -20
});


const button = document.querySelector("#btn");
const par = document.querySelector("#par");
const copyBtn = document.querySelector("#copyBtn");


const quotes = [
    "«And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about». — Haruki Murakami, Kafka on the Shore.",
    "«Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely». - Roy T. Bennett, The Light in the Heart.",
    "«Don't be pushed around by the fears in your mind. Be led by the dreams in your heart». -  Roy T. Bennett, The Light in the Heart.",
    "«Though nobody can go back and make a new beginning... Anyone can start over and make a new ending». - Chico Xavier",
    "«If there's a single lesson that life teaches us, it's that wishing doesn't make it so». - Lev Grossman, The Magicians",
    "«The trouble is if you don’t spend your life yourself, other people spend it for you». - Peter Shaffer, Five Finger Exercise",
    "«The fool doth think he is wise, but the wise man knows himself to be a fool». -  William Shakespeare, As You Like It"
];

function showRandomQuote() {
    let  randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    par.textContent = randomQuotes; 
}

showRandomQuote(); 

button.addEventListener("click", () => {
    gsap.fromTo("#btn",
        { scale: 1 },
        { scale: 0.9,duration: 0.1,yoyo: true, repeat: 1});
showRandomQuote();
}); 
// copy btn 
copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(par.textContent);
        const originalText = copyBtn.textContent;
        copyBtn. textContent = " Copied!";
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 1500);
    }  catch (err) {
        console.error("Failed to copy quote:", err);
    }
});
