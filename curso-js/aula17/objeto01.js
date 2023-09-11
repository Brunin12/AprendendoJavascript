let amigo = {
    nome: 'jose',
    Genero: 'M',
    peso: 85.4,
    engordar(p = 0) {
        this.peso += p
        console.log(`${this.nome} engordou ${p} Kg`)
        return amigo.peso
    }
}
console.log(`${amigo.nome} tem ${amigo.peso} Kg`);
amigo.engordar(5)
console.log(`${amigo.nome} tem ${amigo.peso} Kg`)