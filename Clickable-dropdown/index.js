/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let mydropdown = document.getElementById("myDropdown");
let btn = document.querySelector(".dropbtn");
btn.addEventListener('click', () => {
        mydropdown.classList.toggle("show");
    })
    // Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
})