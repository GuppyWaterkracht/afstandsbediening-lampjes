input.onButtonPressed(Button.A, function () {
    opdracht += 1
})
input.onButtonPressed(Button.AB, function () {
    if (opdracht == 1) {
        radio.sendString("licht aan")
    } else if (opdracht == 2) {
        radio.sendString("licht uit")
    } else if (opdracht == 3) {
        radio.sendString("gevarenlicht aan")
    } else if (opdracht == 4) {
        radio.sendString("KL aan")
    } else if (opdracht == 5) {
        radio.sendString("KR aan")
    } else if (opdracht == 6) {
        radio.sendString("SeZ aan")
    } else if (opdracht == 7) {
        radio.sendString("OZ aan")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "botsing") {
        music.play(music.stringPlayable("A C5 A C5 A C5 A C5 ", 300), music.PlaybackMode.UntilDone)
        music.stopAllSounds()
    } else if (receivedString == "gestolen") {
        for (let index = 0; index < 4; index++) {
            music.play(music.stringPlayable("E C E C E C E C ", 300), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    opdracht += -1
})
let opdracht = 0
radio.setTransmitPower(7)
radio.setGroup(1)
opdracht = 1
basic.forever(function () {
    basic.showNumber(opdracht)
    if (opdracht == 0) {
        opdracht = 7
    } else if (opdracht == 8) {
        opdracht = 1
    }
})
