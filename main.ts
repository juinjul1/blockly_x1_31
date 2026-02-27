let x = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0,
0
]
let y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1
]
basic.forever(function () {
    for (let i = 0; i <= x.length - 1; i++) {
        led.plot(x[i], y[i])
        basic.pause(200)
        basic.clearScreen()
    }
})
