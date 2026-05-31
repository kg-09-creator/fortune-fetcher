const answers = [
    "It is decidedly so.",
    "Without a doubt.",
    "It is certain",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Yes definitely.",
    "Yes.",
    "Outlook looks good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Better not tell you now.",
    "Ask again later.",
    "Concentrate and ask again.",
    "Cannot predict now.",
    "My reply is no.",
    "Don't count on it.",
    "My sources say no.",
    "Very doubtful.",
    "Outlook not so good.",
    "UMM NO-"
];

function generateAns() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    document.getElementById("ans").innerText = answers[randomIndex];
}