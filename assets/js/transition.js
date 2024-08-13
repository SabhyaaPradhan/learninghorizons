const animation = {
    element: document.querySelector('.pt'),

    duration: 0.8,
    ease: 'power4.inOut',
    stagger: 0.048,
}

const cloneBoxes = () => {
    for (let i = 0; i < 80; i++) {
        const box = document.createElement('div')
        box.classList.add('pt_box')
        animation.element.append(box)
    }
}
cloneBoxes()

gsap.set('.pt_box', {
    scaleY: 0,
    transformOrigin: '0% 0%',
})

const tlPage = gsap.timeline({
    defaults: {
        duration: animation.duration,
        ease: animation.ease,
        stagger: {
            grid: [1, 11],
            from: 'random',
            each: animation.stagger,
        },
    },
})

const show = () => {
    return new Promise((resolve) => {
        tlPage.to('.pt_box', {
            scaleY: 1,
            transformOrigin: '0% 100%',
            onComplete: resolve,
        })
    })
}

const hide = () => {
    return new Promise((resolve) => {
        tlPage.to('.pt_box', {
            scaleY: 0,
            transformOrigin: '0% 0%',
            onComplete: resolve,
        })
    })
}

export{show, hide}