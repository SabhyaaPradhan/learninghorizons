import { show, hide } from "./transition.js"

const nav = document.querySelector('.nav')

barba.init({
    debug: true,
    transitions: [
        {
            name: 'page-transition',
            once() { },

            async leave() { 
                await show()
            },
            enter() { 
                hide()
            },
        }
    ],
    views: [
        {
            namespace: 'home',
            beforeEnter() {
                document.querySelector('video').play()
            }
        }
    ]
})

barba.hooks.once((data) => {
    updateNav(data.next.namespace)
    data.next.namespace === 'about' && (nav.style.filter = 'invert(1)')
})
barba.hooks.enter((data) => {
    updateNav(data.next.namespace)
    data.next.namespace === 'about'
    ? (nav.style.filter = 'invert(1)')
    : (nav.style.filter = 'invert(0)')
})

const updateNav = (data) => {
    const navPages = document.querySelectorAll('.nav_item_page')

    navPages.forEach((page) => {
        const getData = page.textContent.toLowerCase().includes(data)
        page.classList.remove('--active')
        getData && page.classList.add('--active')
    })
}