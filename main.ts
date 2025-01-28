let 右 = 0
let 左 = 0
makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("Micro:Bit", makerbit.position1602(LcdPosition1602.Pos1), 16)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
}
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
    左 = pins.digitalReadPin(DigitalPin.P13)
    右 = pins.digitalReadPin(DigitalPin.P12)
    if (左 == 0 && 右 == 0) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("Forward", makerbit.position1602(LcdPosition1602.Pos1), 16)
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Run)
    } else if (左 == 1 && 右 == 0) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("Right", makerbit.position1602(LcdPosition1602.Pos1), 16)
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_SpinRight)
    } else if (左 == 0 && 右 == 1) {
        makerbit.clearLcd1602()
        makerbit.showStringOnLcd1602("Left", makerbit.position1602(LcdPosition1602.Pos1), 16)
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_SpinLeft)
    } else {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Run)
    }
})
