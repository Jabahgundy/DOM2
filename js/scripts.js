'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('The DOM Conten has loaded');

    const allParagraphs = document.querySelectorAll('p')
    console.log('how many paragraphs?', allParagraphs.length);
    console.log(allParagraphs);

    allParagraphs.forEach(function (paragraph, index) {
        console.log(index, paragraph);
        // if (index % 2 === 0) {
        //     paragraph.classList.add('bold');

        const spanElement = document.createElement('span');
        spanElement.innerText = `This paragrap is at index ${index}.`
        spanElement.classList.add('bold');
        paragraph.append(spanElement);
    })



});

