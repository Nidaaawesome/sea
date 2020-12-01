basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    turtle.setBrightness(255)
    music.playTone(988, music.beat(BeatFraction.Breve))
    basic.showString("Restricted Zone")
})
