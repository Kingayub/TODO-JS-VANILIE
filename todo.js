let buttonSave = document.querySelector('.save')
let input = document.querySelector('input')


buttonSave.addEventListener("click", () => {

    //ДОБАВЛЕНИЕ ТАСКИ

    let ul = document.querySelector('.todos')
    let newLi = document.createElement('li')
    newLi.className = "todo-text"

    let span1 = document.createElement('span')
    span1.className = "todo-text"
    span1.textContent = input.value
    newLi.prepend(span1)


    let span2 = document.createElement('span')
    span2.className = "todo-trash"

    let i = document.createElement('i')
    i.classList.add("fas", "fa-trash-alt")
    span2.append(i)
    newLi.append(span2)

    ul.append(newLi)
    input.value = ''


    // УДАЛЕНИЕ ТАСКИ
    i.addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove()
    })


})


// СБРОС ВСЕХ ТАСОК
let btnClear = document.querySelector(".clear")
let funcRemove = () => {
    let li = document.querySelectorAll(".todo-text")
    li.forEach(el => el.remove())
}
btnClear.addEventListener('click', funcRemove)



