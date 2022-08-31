const contents = document.querySelectorAll('.content')
const ListItems = document.querySelectorAll('nav ul li')

ListItems.forEach((item,idex) => {
    item.addEventListerner('click',()=>{
        hideAllContents()
        hideAllItems() 
        item.classList.add('active')
        contents[idex].classList.add('show')

    })
})


function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}
 
function hideAllItems(){
    ListItems.forEach(item => item.classList.remove('active'))
}

