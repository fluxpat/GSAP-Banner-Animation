let tl = new TimelineMax()

let video = document.getElementById("video-el")

/* ---------------------------------- Key Timeline Checkpoints ---------------------------------- */
tl.addLabel("cp2", "2")
tl.addLabel("cp2.5", "2.5")
tl.addLabel("cp3", "3")
tl.addLabel("cp6", "6")
tl.addLabel("cp7", "7")
tl.addLabel("cp10", "10")
tl.addLabel("cp11", "11")
tl.addLabel("cp13", "13")
tl.addLabel("cp14", "14")
tl.addLabel("cp14.5", "14.5")
tl.addLabel("cp15.5", "15.5")

// Loader spinning
tl.to('.loader', { duration: 0.5, opacity: 0, delay: 1.5 })

// Three bubbles spinning as a group and expanding with video playing behind
tl.fromTo('.shapes', 2, {opacity: 0}, {opacity: 1}, "cp2")
tl.to('.shapes', { duration: 2, rotation: -180 }, "cp2")
    .to('#blue-shape', { duration: 2, rotation: -280 }, "cp2")
    .to('#red-shape', { duration: 2, rotation: -210 }, "cp2")
    .to('.shapes', { duration: 0.5, scale: 3, ease: "power1.out" }, "cp2")
    .to('.shapes', { duration: 1, scale: 9, ease: "back.in(2)" }, "cp2.5")
    
// Video begins to play in the BG


// Mid text appears and changes
tl.to('.text1', { duration: 1, opacity: 1 }, "cp3")
    .to('.text1', { duration: 1, opacity: 0 }, "cp6")
    .to('.text2', { duration: 1, opacity: 1 }, "cp7")
    .to('.text2', { duration: 0.5, opacity: 0 }, "cp10")
// Bubbles cross-fade
tl.from('#white-shape', { duration: 2, opacity: 0 }, "cp3")
    .to('#blue-shape', { duration: 2, opacity: 0 }, "cp3")

// Another spin of White and Red bubbles
tl.to('.shapes', { duration: 2, rotation: -315 }, "cp10")
    .to('#red-shape', { duration: 2, scale: 6.5 }, "cp10")
    .to('#white-shape', { duration: 2, scale: 2, opacity: 1, y: -10, x: -7 }, "cp10")

// Final spin of White and Red bubbles
tl.to('.shapes', { duration: 2.6, rotation: -225, ease: "power4.inOut" }, "cp13-=0.2")
    .to('#white-shape', { duration: 2.6, scale: 1.5, rotation: 70, y: 18, x: -2, ease: "power4.inOut" }, "cp13-=0.2")

// Logos' fade-in, change color and shift position
tl.from('#qantas-logo-mono', { duration: 1, opacity: 0, ease: "power4.out", y: -70 }, "cp11")
    .from('#aa-logo', { duration: 1, opacity: 0, ease: "power4.out", y: 70 }, "cp11")
    .to('#qantas-logo-mono', { duration: 1.8, opacity: 0, ease: "power2.inOut", y: 180, x: -20 }, "cp13")
    .to('#qantas-logo-colour', { duration: 1.8, opacity: 1, ease: "power2.inOut", y: 180, x: -20 }, "cp13")
    .to('#aa-logo', { duration: 1.8, ease: "power2.inOut", y: 180, x: -60 }, "cp13")
    .from('#logo-divider', { duration: 0.8, ease: "power2.out", y: -20, height: 0 }, "cp14.5")

// Final text animations (price, t&c's etc...)
tl.from('.terms-conditions', { duration: 0.5, opacity: 0, y: -50 }, "cp14")
    .from('.final-text', { duration: 1, opacity: 0, y: -50 }, "cp14.5")
    .from('.see-deals', 0.5, {opacity: 0, scale: 0.7}, "cp15")
