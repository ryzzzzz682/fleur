const messages = [
    "Hi love! I know busy days are coming, always remember that im here always for you ahhh?? hahahahahhaahahah if you are stressed lets watch movies??? or just talk it all out just to make our tummy feel good i mean to release all the overthinking heheheheheh bleeee.",
    "Sooooo envelope 2 ahh?! hahahahahah, I can't believe how lucky I am to have you. even though this forsaken world is always against us thru the hardships and problems, i will still forgive it since this world consist of you a very dont know what to do always but always making sure on how to make me happy and feel loved hahahahahahhah",
    "WHAAAAAAAT!!!!! envelope 3 kana??? are you sure you are reading all of it??? hmmmmmmmmgrrrrrrr!!!!!. You're the best part of my day, every day. It always cancel out lahat ng pagod just spending and talking with you haysssssst how lucky am i to have you talagaaaa loveee na loveee kittaaa kakaagigil ka wahhhhhh!!!!!.",
    "Goodluck with your exams loveee ahhhhhh, im here lang always for you this is just a starting gift dont worry there will be moreee ayieeeeeeeeee medyo rushed lang ito loveeeee since it will be a suprise sana but i know naman you will appreciate it since i know you every small details is very important for you we've been in so much many days thanks loveeee for staying ahhhhhhh i promise you i dont know what to do without you especially this days loveeee not because about enjoying your company, since my heart really craves for you, you've grown so much that i cant afford losing you. You are the very most person that i've liked soo soo much and i am very proudly to say that you are my girlfriend kahit may times na you giving my dry and silent treatment grrrrr bwahahahhaha but still, you are the most kindest, funny, loving person that i will want for the rest of my lifeeee thanks loveee for taking my hand as your boyfriend.",
    "So last one haaa this one always reminds me of you especially you are the one who that make me listen to this since its your favorite hehehehehehhahahahahahahahh. Here's a little something from my heart - click play below."
];

function openIntroModal() {
    // Show the introductory modal
    document.getElementById("intro-modal").style.display = "flex";

    // Set a 3-second delay before switching to the final modal
    setTimeout(() => {
        document.getElementById("intro-modal").style.display = "none";
        openModal();
    }, 3000); // 3000 ms = 3 seconds
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("letter-content").style.display = "none";
}

function openLetter(index) {
    document.getElementById("letter-content").style.display = "block";
    document.getElementById("letter-text").innerText = messages[index - 1];
    if (index === 5) {
        document.getElementById("audio-container").style.display = "block";
    } else {
        document.getElementById("audio-container").style.display = "none";
    }
}

function playAudio() {
    const audio = document.getElementById("audio");
    audio.play();
}

function openSpotify() {
    const spotifyLink = "https://youtube.com/playlist?list=PLKiYp8QVNPnFkoL_cnaPDuLUNQmPwYjEn&si=0BB_QSXsEEY0t4PT"; // Replace with your actual Spotify link
    window.open(spotifyLink, '_blank'); // Opens the Spotify link in a new tab
}

function printPDF() {
    const pdfLink = "1.pdf"; // Replace with your actual PDF link
    window.open(pdfLink, '_blank'); // Opens the PDF link in a new tab or window
}
