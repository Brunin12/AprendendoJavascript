function fatorial(num = 1) {
if (num == 1) {
    return 1
} else {
    return num * fatorial(num-1)
}

}

num = 5
console.log(`o fatorial de ${num} é ${fatorial(num)}`)