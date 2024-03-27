const flipCards = document.querySelector(".flip-cards");
const tabs = document.querySelectorAll(".tabs");
const possibilityHeads = document.querySelectorAll(".possibility__head");
const hoverTabs = document.querySelectorAll(".hover-tab");

flipCards.addEventListener("click", (e) => {
    const flipCard = e.target.closest(".flip-card");

    if (flipCard) {
        flipCard.classList.toggle("active");
    }
});

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const defTab = e.target.closest(".def-tab:not(.active)");

        if (defTab) {
            const defTabActive = tab.querySelector(".def-tab.active");
            if (defTabActive) {
                defTabActive.classList.remove("active");
            }
            defTab.classList.add("active");

            const dataIndex = defTab.dataset.index;
            tab.querySelector(".tab-content.active").classList.remove("active");

            const content = tab.querySelector(`.tab-content[data-index='${dataIndex}']`);
            content.classList.add("active");
        }
    });
});

possibilityHeads.forEach((item) => {
    let isOpen = false;

    item.addEventListener("click", (e) => {
        const buttonPlus = e.target.closest(".button.plus");

        if (buttonPlus) {
            const root = item.closest(".possibility");
            const rootBody = root.querySelector(".possibility__wrapper-scroll");
            item.classList.toggle("active");

            if (isOpen) {
                rootBody.style.height = `0px`;
            } else {
                rootBody.style.height = `${rootBody.scrollHeight}px`;
            }

            isOpen = !isOpen;
        }
    });
});

hoverTabs.forEach((hoverTab) => {
    hoverTab.addEventListener("mouseenter", () => {
        const index = hoverTab.dataset.index;
        const content = document.querySelector(`.hover-tab-content[data-index='${index}']`);
        content.classList.add("active");

        document.querySelector(".hover-tab-default").classList.remove("active");
    });

    hoverTab.addEventListener("mouseout", () => {
        const index = hoverTab.dataset.index;
        const content = document.querySelector(`.hover-tab-content[data-index='${index}']`);
        content.classList.remove("active");

        document.querySelector(".hover-tab-default").classList.add("active");
    });
});

// Slider
new Swiper(".swiper-advantages", {
    slidesPerView: 1.4,
    spaceBetween: 10,
    pagination: {
        el: ".advantages .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".advantages .button.next",
        prevEl: ".advantages .button.prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2.87,
            spaceBetween: 20,
        },
    },
});

new Swiper(".swiper-panel", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".panel .button.next",
        prevEl: ".panel .button.prev",
    },
    breakpoints: {
        1200: {
            spaceBetween: 60,
        },
    },
});

new Swiper(".swiper-modes", {
    slidesPerView: 1.4,
    spaceBetween: 10,
    pagination: {
        el: ".modes .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".modes .button.next",
        prevEl: ".modes .button.prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2.87,
            spaceBetween: 20,
        },
    },
});

// Animation
// const observer = new IntersectionObserver(
//     (entires, observer) => {
//         entires.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const target = entry.target;
//                 const delay = target.getAttribute("data-delay");
//                 if (delay) {
//                     setTimeout(() => {
//                         target.classList.add("active");
//                     }, Number(delay));
//                 } else {
//                     target.classList.add("active");
//                 }
//                 observer.unobserve(entry);
//             }
//         });
//     },
//     { threshold: 0.25 }
// );

// const animatedEls = document.querySelectorAll("[data-animate]");

// animatedEls.forEach((el) => {
//     observer.observe(el);
// });

function showAnimate() {
    const animateItems = document.querySelectorAll("[data-animate]:not(.active)");

    // Stop listening when all animate items are showing
    // if (!animateItems.length) {
    //     document.removeEventListener("scroll", showAnimate);
    //     return;
    // }

    if (animateItems.length) {
        animateItems.forEach((item) => {
            const { innerHeight } = window;
            const { top } = item.getBoundingClientRect();

            if (top < innerHeight - 150) {
                const delay = item.getAttribute("data-delay");
                if (delay) {
                    setTimeout(() => {
                        item.classList.add("active");
                    }, Number(delay));
                } else {
                    item.classList.add("active");
                }
            }
        });
    }
}

showAnimate();

function loadImage() {
    const images = document.querySelectorAll("img[data-src]:not([src])");

    if (images.length) {
        images.forEach((image) => {
            const { innerHeight } = window;
            const { top } = image.getBoundingClientRect();

            if (top < innerHeight + 200) {
                image.src = image.dataset.src;
            }
        });
    }
}

loadImage();

document.addEventListener("scroll", () => {
    showAnimate();
    loadImage();
});

// Show images
// const images = document.querySelectorAll("img[data-src]");
//
// if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 // Load the image
//                 entry.target.src = entry.target.dataset.src;
//
//                 // Stop observing the image
//                 observer.unobserve(entry.target);
//             }
//         });
//     });
//
//     images.forEach((image) => {
//         observer.observe(image);
//     });
// }else{
//     images.forEach(function (image) { image.src = image.dataset.src });
// }

// open form register
const demoBtns = document.querySelectorAll(".get-demo");

if (demoBtns) {
    demoBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const documentParent = window.parent.document;
            const close = documentParent.querySelector(".close_iframe");
            close.click();

            const buttonDemo = documentParent.querySelector(".button.btn_black");
            buttonDemo.click();
        });
    });
}
