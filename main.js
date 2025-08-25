var typed=new Typed(".text",{
    strings: ["Frontend Developer", " BCA Student", "Web Designer", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function toggleMode() {
    // Optionally set a default mode here if needed
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

}