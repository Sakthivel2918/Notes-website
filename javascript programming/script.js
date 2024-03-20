//select popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox =document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style . display ="block"
    popupbox.style .display ="block"

})

//select cancel button



var cancelnote=document.getElementById("cancel-note")

cancelnote.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style . display ="none"
    popupbox.style .display ="none"

})

//select container,add-note,Note-title-input,Sub-title-input,short description-input

var conainer =document.querySelector(".container")
var addnote =document.getElementById("add-note")
var notetitleinput =document.getElementById("Note-title-input")
var subtitleinput=document.getElementById("Sub-title-input")
var shortdescriptioninput=document.getElementById("short description-input")

addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document .createElement("div")
    div .setAttribute ("class","book-container")
    div.innerHTML=`<h2>${notetitleinput.value} <h5>${subtitleinput.value} </h5><p>${shortdescriptioninput.value}</p>`
    conainer .append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"
})