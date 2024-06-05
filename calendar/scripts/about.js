const faqTitles = document.querySelectorAll('h2.faq-title');

faqTitles.forEach(faqTitle => {
    faqTitle.addEventListener('click', function() {
        let paragraph = this.parentElement.querySelector('p');
        paragraph.classList.toggle('hidden');
    })
})