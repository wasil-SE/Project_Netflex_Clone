
const toast = document.getElementById("toast");

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Sign-in demo
document.querySelector(".signinbtn").addEventListener("click", () => {
    showToast("Sign In is a demo feature in this portfolio project.");
});

// Email validation for both Get Started buttons
document.querySelectorAll(".get-started").forEach((button) => {
    button.addEventListener("click", () => {
        const emailInput = button.parentElement.querySelector(".email-input") ||
            document.querySelector(".email-input");

        if (!emailInput || !emailInput.value.trim()) {
            showToast("Please enter your email address.");
            emailInput?.focus();
            return;
        }

        if (!emailInput.checkValidity()) {
            showToast("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        showToast("Thanks! This is a demo — no account is created.");
        emailInput.value = "";
    });
});

// FAQ accordion
const answers = {
    "What is Netflix?": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",


    "How much does Netflix cost?": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100/month.",


    "Where can I watch?": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.   You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",


    "How do I cancel?": "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",


    "Whatcan I watch on Netflix?": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",


    "Is Netflix good for kids?": "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
};

document.querySelectorAll(".FAQs").forEach((faq) => {
    const question = faq.querySelector(".Q1");
    const answer = document.createElement("p");
    answer.className = "faq-answer";
    answer.textContent = answers[question.textContent.trim()] || "This is a portfolio demo.";
    faq.appendChild(answer);

    faq.addEventListener("click", () => {
        document.querySelectorAll(".FAQs.active").forEach((openFaq) => {
            if (openFaq !== faq) openFaq.classList.remove("active");
        });

        faq.classList.toggle("active");
    });
});

// Small interaction for trending cards
document.querySelectorAll(".movies .movies").forEach((movie, index) => {
    movie.addEventListener("click", () => {
        showToast(`Trending title #${index + 1} selected — demo only.`);
    });
});
