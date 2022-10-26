const   prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);   
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
        activeDot(index);  
    } else {
        index++;
        prepareCurrentSlide(index);        
    }
    resetTimer(); 
}

const prevSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++; 
    }
    prepareCurrentSlide(index);
    resetTimer();
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        resetTimer(); 
    })
});

let timeoutID

const startTimer = () => {
    timeoutID = setInterval(nextSlide, 2000);
}

startTimer();
        
const resetTimer = () => {
    clearInterval(timeoutID);
    startTimer();
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
