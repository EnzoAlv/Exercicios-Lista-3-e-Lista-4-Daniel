function ex1(){
    let precos = []
    let soma = 0
    for(let i=0;i<10;i++){
        precos[i] = Number(prompt(`Informe ${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        soma = soma + precos[i]
    }
    alert(`A média dos preços é ${soma/10}`)
}
function ex2(){
    let vetor = []
    let soma =0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (vetor[i] % 2 == 0){
            soma = soma + vetor[i]
        }
    }
    alert(`A soma é ${soma}`)
}
function ex3(){
    let vetor = []
    let soma = 0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (i % 2 == 1){
            soma = soma + vetor[i]
        }
    }
    alert(`Soma ${soma}`)
}

function ex11(){
    let vetor  = []
    
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    
    let pares = []; let iPares = 0;
    let impares = []; let iImpares = 0
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            pares[iPares] = vetor[i]
            iPares++
        }
        else {
            impares[iImpares] = vetor[i]
            iImpares++ 
        }
    }
    console.log(`Pares ${pares} Qtde: ${pares.length}`)
    console.log(`Ímpares ${impares} Qtde: ${impares.length}`)
}

function ex12(){
    let vetor = []
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    let mult2 = [], mult3 = [], mult2e3 = []
    for(let i=0;i<7;i++){
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
            mult2e3.push(vetor[i])
            mult2.push(vetor[i])
            mult3.push(vetor[i])
        }
        else if (vetor[i] % 2 == 0){
            mult2.push(vetor[i])
        }
        else if (vetor[i] % 3 == 0){
            mult3.push(vetor[i])
        }
    }
    console.log(`Múltiplos de 2 ${mult2}`)
    console.log(`Múltiplos de 3 ${mult3}`)
    console.log(`Múltiplos de 2 e 3 ${mult2e3}`)
}

function ex13(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        let achou = false 
        for(let i=0; i<5;i++){
            if (codigo == codigos[i]){
                achou = true 
                if (estoque[i] >= qtde){ 
                    estoque[i] = estoque[i] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
            }
        }
        if(!achou) {
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}

function ex31(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        let achou = false
        if (codigos.includes(codigo)){
                achou = true 
                let posicao = codigos.indexOf(codigo)
                if (estoque[posicao] >= qtde){ 
                    estoque[posicao] = estoque[posicao] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
        }
        if (!achou) {
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}
function ex14(){
    let vet = []
    for (let i = 0; i<10; i++){
        vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    let posi = []
    for(let i = 0; i<10; i++){
        if(vet[i] == 30){
            posi.push(i)
        }
    }
    alert(`Posicoes aonde o 30 aparecem ${posi}`)
}
function ex15(){
    let logica = []
    let prog = []
    let comum = []
    for(let i = 0; i<10 ; i++){
        logica[i] = Number(prompt(`Informe o ${i+1}o. aluno de logica`))
    }
    for(let i = 0; i<15 ; i++){
        prog[i] = Number(prompt(`Informe o ${i+1}o. aluno de programacao`))
    }
    for(let i = 0; i<10; i++){
        if(prog.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    alert(`alunos que fazem os dois cursos: ${comum}`)
}
function ex16(){
    let vendas = []
    let comissoes = []
    let nomes = []
    let percentual = []
    for(let i = 0; i<5 ; i++){
        vendas[i] = Number(prompt(`Informe venda do ${i+1} vendedor`))
        percentual[i] = Number(prompt(`informe do ${i+1} vendedor`))
        nomes[i] = prompt(`Informe o nome do ${i+1} vendedor`)
        comissoes[i] = (vendas[i] / percentual[i]) * 100
    }
    let total = 0
    let maior = comissoes[0]; let menor = comissoes[0]
    for(let i=0; i<5; i++){
        total += vendas[i]
        if(comissoes[i] > maior){
            maior = comissoes[i]
        }
        if(comissoes[i] < menor){
            menor = comissoes[i]
        }
    }
    alert(`valor total ${total}`)
    alert(`maior valor ${maior} e quem recebe ${nomes[comissoes.indexOf(maior)]}`)
    alert(`maior valor ${menor} e quem recebe ${nomes[comissoes.indexOf(menor)]}`)
}
function ex17(){
    let numeros = []
    let somapositivo = 0
    let negativos = 0
    for(let i = 0; i<10 ; i++){
        numeros[i] = Number(prompt(`Insira o ${i+1}o. numero real`))
        if(numeros[i]>=0){
            somapositivo = somapositivo + numeros[i]
        }
        else{
            negativos = negativos + 1
        }
    }
    alert(`A soma dos numeros positivos é: ${somapositivo}`)
    alert(`A quantidade de numeros negativos é: ${negativos}`)
}
function ex18(){
    let alunos = []
    let media = []
    let maiornota
    let melhoraluno
    let alunosDeRec = []
    let rec = []
    let notaquefalta = []
    for(let i = 0; i<7 ; i++){
        alunos[i] = prompt(`Insira o nome do ${i+1}o. aluno`)
        media[i] = Number(prompt(`Insira a media do ${i+1}o. aluno`))
    }
    maiornota = media[0]
    melhoraluno = alunos[0]
    for(i = 1 ; i<7; i++){
        if(media[i] >= maiornota){
            maiornota = media[i]
            melhoraluno = alunos[i]
        }
    }
    for(i = 0; i<7 ; i++){
        if(media[i]<7){
            alunosDeRec.push(alunos[i])
            rec.push(media[i])
            notaquefalta.push(7-rec[i]) 
        }
    }
    alert(`Os alunos de recuperação são: ${alunosDeRec} e a nota que falta para eles alcançarem a aprovação é: ${notaquefalta}`)
    alert(`O melhor aluno é: ${melhoraluno} e a sua nota foi: ${maiornota}`)
}
function ex19(){
    let nomeproduto = []
    let codproduto = []
    let precoproduto = []
    let novopreco = []
    for(let i = 0; i<3; i++){
        nomeproduto[i] = prompt(`Escreva o nome do ${i+1}o. produto`)
        codproduto[i] = Number(prompt(`Escreva o código do ${i+1}o. produto`))
        precoproduto[i] = Number(prompt(`Escreva o preço do ${i+1}o. produto`))
    }
    for(i = 0; i<3; i++){
        if(codproduto[i]%2==0){
            novopreco[i] = Number(precoproduto * 1.15)
        }
        else if(precoproduto[i]>1000){
            novopreco[i] = Number(precoproduto * 1.10)
        }
        if((codproduto[i]%2==0)&&(precoproduto[i] > 1000)){
            novopreco[i] = Number(precoproduto * 1.20)
        }
    }
    alert(`Nome do produto:`)
    alert(nomeproduto)
    alert(`Código dos produtos:`)
    alert(codproduto)
    alert(`Preço do produto:`)
    alert(precoproduto)
    alert(`Novo preço do produto:`)
    alert(novopreco)
}
function ex10(){
    let deznum = []
    let cinconum = []
    let resultum = []
    let resultdois = []
    let somasecvet = 0
    let somafinal = 0
    let quantidade = 0
    for(let i = 0; i<10; i++){
        deznum[i] = Number(prompt(`insira o ${i+1}o. Numero do primeiro vetor`))
    }
    for(i = 0; i<5; i++){
        cinconum[i] = Number(prompt(`insira o ${i+1}o. Numero do segundo vetor`))
    }
    for(i = 0; i<5; i++){
        somasecvet += cinconum[i]
    }
    for(i = 0; i<10; i++){
        if(deznum[i]%2 == 0){
            somafinal = deznum[i]+somasecvet
            resultum.push(somafinal)
        }
        else if(deznum[i]%2 != 0){
            for(let o = 0; o<5; o++)
                if(deznum[i]%cinconum[o] == 0){
                    quantidade++
            }
            resultdois.push(quantidade)
            quantidade = 0
        }
    }
    alert(resultum)
    alert(resultdois)
    
}
function ex11(){
    function ex11(){

        let vet=[]
        let vet2=[]
        let vet3=[]
        
            for(let i=0; i<10; i++){ 
                vet.push(Number(prompt('Insira números inteiros')))
            }
            
            for(let i=0; i<10; i++){ 
                if (vet[i]%2==0)
                vet2.push(vet[i])
    
                else
                vet3.push(vet[i])
            }
            
            alert(`Os números pares são ${vet2}`)
            alert(`Os números ímpares são ${vet3}`)
    }
}
function ex12(){
    let num = []
    let soma = 0
    for(let i = 0; i<5; i++){
        num[i] = Number(prompt(`Digite o ${i+1}o. numero`))
        soma += num[i]
    }
    for(let i = 0; i<5; i++){
        alert(`Digite o ${i+1}o. numero ${num[i]}`)
    }
    alert(`Os numeros digitados foram ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} = ${soma}`)
}
function ex13(){
    let nome = []
    let nota = []
    let media = 0
    for(let i = 0; i<8; i++){
        nome[i] = prompt(`Insira o nome do ${i+1}o. aluno`)
        nota[i] = Number(prompt(`Insira a nota do ${nome[i]}`))
    }
    for(let i = 0; i<8; i++){
        alert(`\nRelatório de Notas\n${nome[i]} ${nota[i]}\n`)
    }
    for(let i = 0; i<8; i++){
        media = media + nota[i]
    }
    media = media/8
    alert(`Média dos alunos: ${media}`)
}
function ex14(){
    let nota1 = []
    let nota2 = []
    let nome = []
    for(let i = 0; i<6; i++){
        
    }
}
function exemplo(){
    let codigos = []
    let nomes = []
    let i
    for(i = 0; i<2 ; i++){
        let codigo = Number(prompt(`Insira um codigo de aluno`)) 
        while(codigos.includes(codigo)){
            codigo = Number(prompt(`Codigo ja existe, insira novos dados`))
        }
        codigos[i] = codigo
        nomes = prompt(`Insira o ${i+1}o. nome`)
    }
    alert(codigos)
    alert(nomes)
}