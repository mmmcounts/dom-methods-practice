let parent = document.querySelector('body')
let button = document.createElement('button')
let main = document.createElement('main')

button.append('Remove')

parent.append(button)
parent.append(main)

let image = document.createElement('img')
image.src = 'https://i.imgflip.com/2wq27w.png'

let link = document.createElement('a')
link.href = 'https://www.merriam-webster.com/dictionary/shock'
link.append('This Is My Shocked Face')

image.classList.add("image")
link.classList.add("link")

main.append(image)
main.append(link)

//image.textContent = 'This Is My Shocked Face'
//image.href = 'https://i.imgflip.com/2wq27w.png'
//link.href = 'https://www.merriam-webster.com/dictionary/shock'

button.onclick = function () {
    main.remove()
}



//https://i.imgflip.com/2wq27w.png
//https://www.merriam-webster.com/dictionary/shock