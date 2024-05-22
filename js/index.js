document.addEventListener("DOMContentLoaded", () => {
    let skills = document.querySelectorAll(".skills");

    function checkVisibility() {
        let scrollPos = window.scrollY + window.innerHeight;
        skills.forEach(skill => {
            if (skill.getBoundingClientRect().top + window.scrollY < scrollPos) {
                skill.classList.add('visible');
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check to handle the case where the skills are already in view


    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load

    document.querySelectorAll(".but").forEach(button => {
        button.addEventListener("click", (event) => {
            let tar = event.currentTarget;
            let p = tar.nextElementSibling;
            p.classList.toggle("d-none");
        });
    });
});
