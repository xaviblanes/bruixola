basic.forever(function () {
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        basic.showString("N")
    }
    if (input.compassHeading() < 135 && input.compassHeading() > 45) {
        basic.showString("E")
    }
    if (input.compassHeading() < 225 && input.compassHeading() > 135) {
        basic.showString("S")
    }
    if (input.compassHeading() < 315 && input.compassHeading() > 225) {
        basic.showString("W")
    }
})
