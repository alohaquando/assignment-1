def reset_list():
    global answer
    answer = []
    index = 0
    while index <= len(answer):
        basic.pause(100)
        index += 1
def Reset_function(num: number, num2: number):
    global Compare_edit, result_reset
    Compare_edit = [1]
    result_reset = []
    index2 = 0
    while index2 <= len(answer):
        if answer[index2] == Compare_edit[index2]:
            if answer[index2] == 1:
                result_reset.append(1)
            else:
                result_reset.append(0)
        else:
            result_reset.append(0)
        index2 += 1
result_reset: List[number] = []
Compare_edit: List[number] = []
answer: List[number] = []
reset_list()

def change_binary(n: number):
    b = []
    result_binary = []
    while n!=0:
        b.append(n%2)
        n = n//2
    for i in range(len(b)-1,-1,-1):
        result_binary.append(i)
    return result_binary