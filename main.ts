input.onButtonPressed(Button.A, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.back()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P0)
