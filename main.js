// selctors
const items = document.querySelectorAll('.faq-item')

// event listener
items.forEach((item) => {
  const header = item.querySelector('header')

  header.addEventListener('click', start)
})

// functions
function start() {
  makeActive(this.dataset.id, this)
}

// do all things here
function makeActive(id, el) {
  items.forEach((item) => {
    const header = item.querySelector('header'),
      p = header.children[0],
      doc = header.parentElement.lastElementChild
    icon = header.lastElementChild

    if (header.dataset.id === id) {
      p.className = p.className === 'active' ? '' : 'active'
      icon.style.transform =
        p.className === 'active' ? 'rotate(180deg) ' : 'rotate(0deg)'
      doc.classList.toggle('d-none')
    } else {
      p.className = ''
      icon.style.transform = 'rotate(0deg)'
      doc.classList.add('d-none')
    }
  })
}
