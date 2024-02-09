function pickWord(element) {
    if (text1 == '__') {
        text1 =  element.innerHTML
    }
    else if (text2 == '__') {
        text2 =  element.innerHTML
    }
    else if (text3 == '__') {
        text3 =  element.innerHTML
    }
    else if (text4 == '__') {
        text4 =  element.innerHTML
    }
    else if (text5 == '__') {
        text5 =  element.innerHTML
    }
    updateView()
}