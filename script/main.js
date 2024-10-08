// Toggle &Responsive Navigatioon
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click",() => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    });
};

navSlide();

// Clear form before unload
window.onbeforunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};