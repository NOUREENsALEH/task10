const checkConnection = () => {
    const isOnline = navigator.onLine;
    if (isOnline) {
        return;
    } else {
        document.body.textContent = "Is Offline";
    }
};
checkConnection();

const cursor = document.querySelector(".circle_cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 20 + "px";
    cursor.style.top = e.clientY - 20 + "px";
});

const sections = document.querySelectorAll("section");
const menu = document.querySelectorAll(".menu a");
const toTopBtn = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
    const windowScrollY = window.scrollY;
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffsetTop = section.offsetTop;
        menu.forEach((link) => {
            const linkRef = link.getAttribute("href").slice(1);
            /// check offset
            if (windowScrollY >= sectionOffsetTop) {
                if (sectionId === linkRef) {
                    link.classList.add(`active`);
                    document.title = `BOM | ${sectionId.toUpperCase()}`;
                } else {
                    link.classList.remove(`active`);
                }
            }
        });
    });
    if (windowScrollY >= 100) {
        toTopBtn.classList.add("active");
    } else {
        toTopBtn.classList.remove("active");
    }
});

toTopBtn.addEventListener("click", () => {
    scrollTo({
        top: 0,
    });
});

window.addEventListener("blur", () => {
    document.title = `BOM | BROWSER 😒`;
});

const initailaTitle = document.title;
window.addEventListener("focus", () => {
    document.title = `${initailaTitle}`;
});

const loading_page = document.querySelector(".loading_page");
const loaderCouter = loading_page.children[1];
let counter = 0;

function intervelCounter() {
    const interval = setInterval(() => {
        counter++;
        if (counter == 100) {
            clearInterval(interval);
            loading_page.classList.add("hiddenLoader");
            loading_page.children[0].classList.add("hiddenTitle");
            loading_page.children[1].classList.add("hiddenTitle");
        }
        loaderCouter.textContent = `${counter}%`;
    }, 50);
}
intervelCounter();

// Real-time Clock
const clockElement = document.querySelector(".clock");
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();


