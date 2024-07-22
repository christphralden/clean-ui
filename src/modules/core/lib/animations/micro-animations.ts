import gsap from "gsap";

export function staggerText({
    className
}:{
    className : string
}) {
    gsap.from(className, {
        duration: 0.5,
        y: 100,
        stagger: {
            each: 0.02,
        },
        ease: "expo.inOut",
    });
}