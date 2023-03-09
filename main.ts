let strip = 0
basic.showIcon(IconNames.Umbrella)
Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Program().clear()
basic.forever(function () {
    if (Tinybit.Voice_Sensor() > 100) {
        strip = randint(0, 5)
        Tinybit.RGB_Car_Big2(randint(0, 255), randint(0, 255), randint(0, 255))
        Tinybit.RGB_Car_Program().showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        Tinybit.RGB_Car_Program().show()
    }
})
basic.forever(function () {
    if (strip == 0) {
        basic.showIcon(IconNames.TShirt)
    } else if (strip == 1) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (strip == 2) {
        basic.showIcon(IconNames.House)
    } else if (strip == 3) {
        basic.showIcon(IconNames.Ghost)
    } else if (strip == 4) {
        basic.showIcon(IconNames.Diamond)
    } else if (strip == 5) {
        basic.showIcon(IconNames.EigthNote)
    }
})
