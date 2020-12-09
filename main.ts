function reset_list() {
    
    answer = []
    let index = 0
    while (index <= answer.length) {
        basic.pause(100)
        index += 1
    }
}

function Reset_function(num: number, num2: number) {
    
    Compare_edit = [1]
    result_reset = []
    let index2 = 0
    while (index2 <= answer.length) {
        if (answer[index2] == Compare_edit[index2]) {
            if (answer[index2] == 1) {
                result_reset.push(1)
            } else {
                result_reset.push(0)
            }
            
        } else {
            result_reset.push(0)
        }
        
        index2 += 1
    }
}

let result_reset : number[] = []
let Compare_edit : number[] = []
let answer : number[] = []
reset_list()
function change_binary(n: number) {
    let b = []
    let result_binary = []
    while (n != 0) {
        b.push(n % 2)
        n = Math.idiv(n, 2)
    }
    for (let i = b.length - 1; i < -1; i += -1) {
        result_binary.push(i)
    }
    return result_binary
}

