var idade = 67;
console.log(`você tem ${idade}`)
if (idade < 16) {
  console.log("não vota");
} else if (idade < 18 || idade > 65) {
  console.log("o voto opicional");
} else {
  console.log("o voto obrigatorio");
}
