const rules = document.getElementById('rules')
const true1 = document.getElementById('true')
const false1 = document.getElementById('false')
const main1 = document.getElementById('main1')
const close = document.getElementsByTagName(':after')


const mainMenu = document.getElementById("menu")
console.log(menu);


menu.addEventListener("mouseenter", () => {
  menuHover.style.opacity = "1"
})

menu.addEventListener("mouseleave", () => {
  menuHover.style.opacity = "0"
})

rules.addEventListener('click',() => {
    
    rules1.style.transform="translateX(0)"
       main1.style.filter = "blur(5px)" 
    })
    
    close1.addEventListener('click' ,() => {
        rules1.style.transform="translateY(-2000px)"
        main1.style.filter = "blur(0px)" 
    
        
    })
    
    

bt1.addEventListener('click', () => {
    bt1.style.border ="solid red 5px";
    false1.style.opacity ="1";
   
    bt2.style.display ="none"
    bt3.style.display ="none"
    bt4.style.display ="none"
    retry.style.transform ="translateX(0)"

})

bt2.addEventListener('click', () => {
    bt2.style.border =" solid red 5px"
    false1.style.opacity ="1";
    bt1.style.display ="none"
    bt3.style.display ="none"
    bt4.style.display ="none"
    retry.style.transform ="translateX(0)"
})

bt3.addEventListener('click', () => {
    bt3.style.border =" solid red 5px"
    false1.style.opacity ="1";
    bt1.style.display ="none"
    bt2.style.display ="none"
    bt4.style.display ="none"
    retry.style.transform ="translateX(0)"
})

bt4.addEventListener('click', () => {
    bt4.style.border =" solid green 5px"
    true1.style.opacity ="1";
    bt1.style.display ="none"
    bt3.style.display ="none"
    bt2.style.display ="none"
    next.style.transform ="translateX(0)"
})

retry.addEventListener('click',() => {
    window.location.reload()
})

next.addEventListener('click',() => {
    document.location.href='../html/game1.4.html'
    
})