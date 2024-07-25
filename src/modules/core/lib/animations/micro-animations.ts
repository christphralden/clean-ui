import gsap from "gsap";

export function staggerTextFrom({
    className,
    duration = 0.5,
    y = 100,
    timing = 0.02
}:{
    className : string
    duration? : number
    y? : number
    timing? : number
}) {
    return gsap.from(`.${className}`, {
        duration: duration,
        y: y,
        stagger: {
            each: timing,
        },
        ease: "expo.inOut",
    });
}

export function waveEffect({
    className,
    duration = 1,
    y = 50,
    timing = 0.05,
}:{
    className : string
    duration? : number
    y? : number
    timing? : number
    delay? : number
}) {
    return gsap.from(`.${className}`, {
        duration: duration,
        y: y,
        opacity: 0,
        stagger: {
            each: timing,
            from: "start",
            ease: "sine.inOut"
        },
        ease: "power2.out",
    })
}

export function skewedSlideIn({
    className,
    duration = 1,
    x = 100,
    skewX = 45,
    opacity = 0,
    timing = 0.05,
}:{
    className : string
    duration? : number
    x? : number
    skewX? : number
    opacity? : number
    timing? : number
}) {
    return gsap.from(`.${className}`, {
        duration: duration,
        x: x,
        skewX: skewX,
        opacity: opacity,
        stagger: {
            each: timing,
        },
        ease: "expo.out",
    })
}

export function fadeInSlideFromLeft({
    className,
    duration = 1,
    x = -100,
    opacity = 0,
    timing = 0.05
}:{
    className : string
    duration? : number
    x? : number
    opacity? : number
    timing? : number
}) {
    return gsap.from(`.${className}`, {
        duration: duration,
        x: x,
        opacity: opacity,
        stagger: {
            each: timing,
        },
        ease: "power2.out",
    });
}