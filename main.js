const els = document.querySelector('div')

els.forEach(el => {
    console.log(el.dataset.fruitName) // fruit-name -> fruitName
})