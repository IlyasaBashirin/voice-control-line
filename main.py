strip = 0
basic.show_icon(IconNames.GHOST)
Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Program().clear()

def on_forever():
    global strip
    if Tinybit.Voice_Sensor() > 100:
        strip = randint(0, 5)
        Tinybit.RGB_Car_Big2(randint(0, 255), randint(0, 255), randint(0, 255))
        Tinybit.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever)
