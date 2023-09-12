const allImages = document.querySelectorAll(".singleImage");

let currentIndex = 0;
document.getElementById(`${currentIndex}`).style.background = "white"
allImages.forEach((image, index) => {
    image.style.left = `${index * 100}%`
})

initialPreviousDisabled(true)
function initialPreviousDisabled(currentIndexZero) {
    if (currentIndexZero) {
        if (currentIndex === 0) {
            document.getElementById("previous").setAttribute('disabled', '')
        }
    } else {
        if (currentIndex == 4) {
            document.getElementById("next").setAttribute('disabled', '')
        } else {
            document.getElementById("next").removeAttribute('disabled', '');
        }
    }

}

function handleNext() {
    initialPreviousDisabled(true)
    initialPreviousDisabled(false);
    if (currentIndex <= 6) {
        currentIndex++;
        nextSlide()
    }
    if (currentIndex != 0) {
        document.getElementById("previous").removeAttribute('disabled', '')
    }
    changeBackGroundLoop();
}


function handlePrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        nextSlide()
    } else {
        nextSlide();
    }
    changeBackGroundLoop();
    initialPreviousDisabled(false)
    initialPreviousDisabled(true)

}
function nextSlide() {
    allImages.forEach((slide) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`
    })
}


function handleSlide(id) {
    currentIndex = id;
    if (currentIndex > 0) {
        document.getElementById("previous").removeAttribute('disabled', '')
    } else {
        document.getElementById("previous").setAttribute('disabled', '')
    }
    if (currentIndex == 5) {
        document.getElementById("next").setAttribute('disabled', '')
    } else {
        document.getElementById("next").removeAttribute('disabled', '')
    }
    changeBackGroundLoop();
    nextSlide()
}

var interval = setInterval(() => {
    if (currentIndex == 5) {
        currentIndex = -1;
        document.getElementById("previous").setAttribute('disabled', '')
    }
    handleNext();
}, 8000)

function changeBackGroundLoop() {
    for (let index = 0; index < 6; index++) {
        if (index == currentIndex) {
            document.getElementById(`${currentIndex}`).style.background = "white"
        } else {
            document.getElementById(`${index}`).style.background = "grey"
        }
    }
}
