/*
	Scroll To
	------
    Scroll to the anchor. (Ex.: <a href="#anchor">)
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
    });
});
