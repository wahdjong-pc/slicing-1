const scroller = document.querySelectorAll('.container__scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation(){
    scroller.forEach((scroller) => {
    
        scroller.setAttribute("data-animated", true);

        const scrollInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);

            scrollInner.appendChild(duplicatedItem);

        })
    });
}