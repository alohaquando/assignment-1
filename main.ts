function reset_list () {
    answer = []
    for (let index = 0; index <= answer.length; index++) {
        basic.pause(100)
    }
}
function Reset_function (num: number, num2: number) {
    Compare_edit = [1]
    result_reset = []
    for (let index = 0; index <= answer.length; index++) {
        if (answer[index] == Compare_edit[index]) {
            if (answer[index] == 1) {
                result_reset.push(1)
            } else {
                result_reset.push(0)
            }
        } else {
            result_reset.push(0)
        }
    }
}
let result_reset: number[] = []
let Compare_edit: number[] = []
let answer: number[] = []
reset_list()
