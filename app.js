var header = document.getElementsByTagName("header")[0]
var group = document.getElementsByClassName("group")[0]
var group1 = document.getElementsByClassName("group1")[0]
var group2 = document.getElementsByClassName("group2")[0]
var group3 = document.getElementsByClassName("group3")[0]
var village = document.getElementsByClassName("village")[0]
var villagediv = document.getElementsByClassName("villagediv")[0]
var black = document.getElementsByClassName("black")
var group5 = document.getElementsByClassName("group5")[0]
var hidden = document.getElementsByClassName("hidden")[0]
var sun = document.getElementsByClassName("sun")[0]
var moondiv = document.getElementsByClassName("moondiv")[0]
var a = document.getElementsByTagName("a")
var img = document.getElementsByTagName("img")
var h5 = document.getElementsByTagName("h5")
var p = document.getElementsByTagName("p")
var w = document.getElementsByClassName("w")

function lightMode(){
    document.body.style.backgroundColor="white"
    header.classList.add("light")
    group.classList.add("light")
    group1.classList.add("light")
    group2.classList.add("light")
    group3.classList.add("light")
    village.classList.add("light")
    villagediv.classList.add("light")
    group5.classList.add("light")
    hidden.style.color = "white"
    for(var i=0; i<black.length; i++){
        black[i].style.backgroundColor="white"
    }
    for(var i=0; i<a.length; i++){
        a[i].style.color="black"
    }
    sun.style.display="none"
    moondiv.style.display="inline-block"
    img[0].style.display="none"
    img[1].style.display="inline-block"
    for(var i=0; i<h5.length; i++){
        h5[i].style.color="black"
    }
    for(var i=0; i<p.length; i++){
        p[i].style.color="black"
    }
    img[28].style.display="none"
    img[29].style.display="inline-block"
    for(var i=0; i<w.length; i++){
        w[i].style.color="black"
    }
}

function darkMode(){
   document.body.style.backgroundColor=""
    header.classList.remove("light")
    group.classList.remove("light")
    group1.classList.remove("light")
    group2.classList.remove("light")
    group3.classList.remove("light")
    village.classList.remove("light")
    villagediv.classList.remove("light")
    group5.classList.remove("light")
    hidden.style.color = ""
    for(var i=0; i<black.length; i++){
        black[i].style.backgroundColor=""
    }
    for(var i=0; i<a.length; i++){
        a[i].style.color=""
    }
    sun.style.display=""
    moondiv.style.display=""
    img[0].style.display=""
    img[1].style.display=""
    for(var i=0; i<h5.length; i++){
        h5[i].style.color=""
    }
    for(var i=0; i<p.length; i++){
        p[i].style.color=""
    }
    img[28].style.display=""
    img[29].style.display=""
    for(var i=0; i<w.length; i++){
        w[i].style.color=""
    }
}