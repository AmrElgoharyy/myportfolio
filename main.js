// start icons
let iconsBox = document.querySelector(".icons")
let icons = document.querySelectorAll(".icons .icon i")
icons.forEach((icon) => {
    icon.onclick = function () {
        iconsBox.classList.toggle("show")
    }
})

// nav bar
let burgerMenu = document.querySelector(".burger-menu")
let navBar = document.querySelector(".header .nav-bar")



burgerMenu.onclick = function () {
    navBar.classList.toggle("show")
}

// mode

let circleBtn = document.querySelector(".mode .circle")
let modeIcon = document.querySelector(".mode i")
let ModeLocalStrorage = localStorage.getItem("mode")
let sectionBackground = localStorage.getItem("section-background")
let mainSectionBackground = localStorage.getItem("main-section-backround")
let mainColor = localStorage.getItem("main-color")
let ModeIconclasslist = localStorage.getItem("modeicon-className")
let progressColor = localStorage.getItem("progress-color")
let projectColor = localStorage.getItem("project-color")

if (ModeLocalStrorage !== null) {
    if (ModeIconclasslist === "fa-sun") {
        document.documentElement.style.setProperty('--section-background', sectionBackground)
        document.documentElement.style.setProperty('--main-section-backround', mainSectionBackground)
        document.documentElement.style.setProperty('--main-color', mainColor)
        document.documentElement.style.setProperty("--progress-color", progressColor)
        document.documentElement.style.setProperty("--project-color", projectColor)

        circleBtn.classList.toggle("shift")
        modeIcon.classList.toggle("shift")
        modeIcon.classList.toggle("fa-moon")
        modeIcon.classList.toggle("fa-sun")
    }
}
circleBtn.onclick = function () {
    circleBtn.classList.toggle("shift")
    modeIcon.classList.toggle("shift")
    modeIcon.classList.toggle("fa-moon")
    modeIcon.classList.toggle("fa-sun")
    if (modeIcon.className === "fa-solid shift fa-sun") {
            document.documentElement.style.setProperty('--section-background', "#eee")
            localStorage.setItem("section-background" , "#eee" )
            document.documentElement.style.setProperty('--main-section-backround', "#ffffff")
            localStorage.setItem('main-section-backround', "#ffffff" )
            document.documentElement.style.setProperty('--main-color', "#0d1117")
            localStorage.setItem('main-color', "#0d1117" )
            localStorage.setItem("modeicon-className" , "fa-sun")
            localStorage.setItem("mode" , "white")
            document.documentElement.style.setProperty("--progress-color" , "#eee")
            localStorage.setItem("progress-color" , "#eee")
            document.documentElement.style.setProperty("--project-color" , "#eee")
            localStorage.setItem("project-color" , "#eee")
    } else {
        document.documentElement.style.setProperty('--section-background', "#1b2126")
        document.documentElement.style.setProperty('--main-section-backround', "#0d1117")
        document.documentElement.style.setProperty('--main-color', "#ffffff")
        document.documentElement.style.setProperty("--project-color" , "#2831393d")
        localStorage.setItem("modeicon-className" , "fa-moon")
        localStorage.setItem("mode" , "dark")
    }
    
}

//  change active class when reach about us
let landingSection = document.querySelector(".landing")
let aboutSection = document.querySelector(".about-me")
let navBarLink = document.querySelectorAll(".nav-bar li a")
let homeLink = document.getElementById("home")
let aboutlink = document.getElementById("about")
let skillsSection = document.querySelector(".my-skills")
let skillSpans = document.querySelectorAll(".my-skills .skills .skill .progress span")
let skillLink = document.getElementById("skill")
let projectlink = document.getElementById("project")
let projectSection = document.querySelector(".projects")
let contactlink = document.getElementById("contact")
let contactSection = document.querySelector(".contact")

// console.log(aboutlink)


window.onscroll = function() {
    if(window.scrollY >= aboutSection.offsetTop) {
        navBarLink.forEach((link) => {
            link.classList.remove("active")
        })
        aboutlink.classList.add("active")
    } else {
        aboutlink.classList.remove("active")
    }
    
    if (window.scrollY <= landingSection.offsetTop) {
        homeLink.classList.add("active")
    }else {
        homeLink.classList.remove("active")
    }

    if (window.scrollY >= skillsSection.offsetTop) {
        skillSpans.forEach((span) => {
            span.style.width = span.dataset.width
        })
        skillLink.classList.add("active")
        aboutlink.classList.remove("active")
    }

    if (window.scrollY >= projectSection.offsetTop) {
        skillLink.classList.remove("active")
        projectlink.classList.add("active")
    }

    if (window.scrollY >= contactSection.offsetTop) {
        projectlink.classList.remove("active")
        contactlink.classList.add("active")
    }

}

