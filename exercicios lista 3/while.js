function mediaIdades(){
    let num = Number(prompt("Quantas idades terao?"))
    let media
    let soma = 0
    let wh = 1
    while(wh<=num){
        let idade = Number(prompt("informe uma idade"))
        soma = soma+idade
        wh= wh+1
    }
    media= soma/num
    alert("A media é "+ media)
}
function ex1(){
    let A, B, C, D, aux
    let conta2=1
    while(conta2<5){
        A = Number(prompt("Informe A"))
        B = Number(prompt("Informe B"))
        C = Number(prompt("Informe C"))
        D = Number(prompt("Informe D"))
        let conta = 1
        while (conta<=3){
            if(A>B){
               aux=A
               A=B
               B=aux
            }
            if(B>C){
               aux=B
               B=C
               C=aux
            }
           if(C>D){
               aux=C
               C=D
               D=aux
            }
            conta++
           
        }
        alert(`Ordem Crescente ${A}, ${B}, ${C}, ${D}`)
        alert(`Ordem Decrescente ${D}, ${C}, ${B}, ${A}`)
        conta2++
    }
}
function ex2(){
    let preco = 5.0; let qtde = 120; 
    const desconto = 200;
    let saida = "<table border=1> <tr> <th> Preço </th> <th> Qtde </th> <th> Desconto </th> <th> Lucro </th> </tr>"
    while (preco >= 1){
        lucro = (preco * qtde) - desconto
        saida += `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26

    }
    saida += "</table>"
    document.getElementById("saida").innerHTML = saida

}
function ex3(){
    let idade
    let f1= 0
    let f2=0
    let f3=0
    let f4=0
    let conta = 1
    while(conta<=8){
        conta++
        idade=Number(prompt(`Informe a Idade ${conta}`))
        if((idade>=0)&& (idade<15)){
            f1++
        }
        else if((idade>=16)&&(idade<=30)){
            f2++
        }
        else if((idade>=31)&&(idade<=45)){
            f3++
        }
        else if((idade>=46)&&(idade<=60)){
            f4++
        }
        else if(idade>60){
            f5++
        }
    }
    alert(`Fx1 ${f1} Fx2 ${f2} Fx3 ${f3} Fx4 ${f4} Fx5 ${f5}`)
    alert(`% Fx1 ${f1/8*100} %Fx5 ${f5/8*100}`)
}
function ex6(){
    let compras = 5
    let valor
    let totalV = 0
    let totalP = 0
    let total = 0
    let valorParcela = 0
    let codigo
    while(compras>0){
        codigo = prompt(`Informe o Codigo`).toUpperCase()
        valor = Number(prompt(`Informe o Valor`))
        if(codigo=="P"){
            totalP += valor
        }
        else if(codigo=="V"){
            totalV +=valor
        }
        else{
            alert("Codigo Invalido bota direito ai")
            continue
        }
        compras = compras-1
    }
    total = totalV + totalP
    valorParcela=total/3
    document.getElementById("result6").innerHTML = `Total à vista ${totalV} Total à Prazo ${totalP} Total ${total} Primeira Parcela ${valorParcela.toFixed(2)}`
}

function ex4(){
    let numero = Number(prompt(`Informe um número`))
    let conta = 0
    let resultado
    let saida = ""
    while(conta <= 10){
        resultado = numero * conta
        // acumulador
        saida = saida + `\n ${numero} X ${conta} = ${resultado}`
        conta++
    }
    alert(saida)
}
function ex5(){
    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = "" 
        while (conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1 ++
    }
}
function ex7(){
    let conta=1
    let idade, peso, altura
    let idade50
    let qtdealtura = 0
    let somaaltura = 0
    let peso40 = 0
    while(conta<=3){
        idade= Number(prompt("Informe Idade"))
        peso=Number(prompt("Informe peso"))
        altura=Number(prompt("informe Altura"))
        if(idade>50){
            idade50++
        }
        if((idade>=10)&&(idade<=20)){
            qtdealtura++
            somaaltura
        }
        if(peso < 40){
            peso40++
        }
        conta++
    }
    document.getElementById(result7).innerHTML = `Total à vista ${idade50} Total à Prazo ${qtdealtura} Total ${somaaltura} Primeira Parcela ${peso40}`
}
function ex8(){
    let idade
    let item1 = 0
    let cabelos
    let olhos
    let peso
    let altura
    let item2soma = 0 
    let item2conta = 0
    let item3 = 0 
    let item4 = 0
    for(let conta = 1; conta<=6; conta++){
        idade = Number(prompt("informe idade"))
        altura = Number(prompt("informe altura"))
        peso = Number(prompt("informe peso"))
        olhos = Number(prompt("informe (A,P,V e C)").toUpperCase)
        cabelos = Number(prompt("informe cor dos cabelos(P,C,L e R").toUpperCase)
        if((idade>50)&&(peso<60)){
            item1++
        }
        if(altura<=1.50){
            item2conta++
            item2soma = item2soma+idade
        }
        if(olhos == "A"){
            item3++
        }
        if((cabelos=='R')&&(olhos!='A')){
            item4++
        }
    }
    document.getElementById(result8).innerHTML = `valor do item 1 ${item1} \n valor do item 2 ${item2} \n valor do item 3 ${item3/6*100} \n valor do item 4 ${item4}`
}
function ex9(){
    let numero = Number(prompt("Informe um numero: "))
    let resto = 0
    for(let conta = 1; (conta <=numero)&&(resto <= 2); conta++){
        if(numero % conta==0){
            resto++
        }
        if(resto==2){
            alert("é primo")
        }
        else{
            alert("Nao é primo")
        }
    }
}function ex20(){
    let opcao
    do{
        opcao = Number(prompt('\n1.Media Aritmetica\n2.Media Ponderada\n3.Sair'))
        switch(opcao){
            case 1 :   
            let resultado
            let num1 = Number(prompt('Insira o primeiro numero'))
            let num2 = Number(prompt('Insira o segundo numero'))
            resultado = (num1 + num2)/(2)
            alert(`o seu resultado é: ${resultado}`); break

            case 2 :  
            let resultado2
            let num3 = Number(prompt('Insira o primeiro numero'))
            let num4 = Number(prompt('Insira o segundo numero'))
            let num5 = Number(prompt('Insira o terceiro numero'))
            let peso1 = Number(prompt('Insira o primeiro peso'))
            let peso2 = Number(prompt('Insira o segundo peso'))
            let peso3 = Number(prompt('Insira o terceiro peso'))
            resultado2 = ((num3*peso1) + (num4*peso2) + (num5*peso3))/(peso1+peso2+peso3)
            alert(`o seu resultado é: ${resultado2}`); break   

            case 3 : alert(`Programa encerrado`) ;break

            default : alert("opcao invalida") ; break
        }
    }while(opcao !=3)
}
function ex21(){
    let cand1 = 0
    let cand2 = 0
    let cand3 = 0
    let cand4 = 0
    let cand5 = 0
    let cand6 = 0
    let opcao
    let total
    total
    do{
        opcao = Number(prompt('\n1.candidato 1\n2.candidato 2\n3.candidato 3\n4.candidato 4\n5.voto nulo\n6.voto branco\n0.Encerrar'))
        switch(opcao){
            case 1 :
            cand1 += 1
            break
            case 2 :  
            cand2 += 1
            break
            case 3 :
            cand3 += 1
            break
            case 4 :
            cand4 += 1
            break
            case 5 :
            cand5 += 1
            break
            case 6 :
            cand6 += 1
            break
            default : 
            alert("opcao invalida")
        }
    }while(opcao !=0)
    total = cand1 + cand2 + cand3 + cand4 + cand5 + cand6
    alert(`total de votos candidato 1 = ${cand1}\ntotal de votos candidato 2 = ${cand2}\ntotal de votos candidato 3 = ${cand3}\ntotal de votos candidato 4 = ${cand4}\ntotal de votos nulo = ${cand5}\ntotal de votos em branco = ${cand6}`)
    alert(`A porcentagem de votos nulo sobre o total é = ${(cand5/total).toFixed(2)*100}%\nA porcentagem de votos em branco sobre o total é = ${(cand6/total).toFixed(2)*100}%`)
}
function ex23(){
    let opcao
    let salario
    let novo
    let ferias
    let meses
    let decimo3
    do{
        opcao = Number(prompt("1. Novo Salário\n2. Férias\n3.Décimo Terceiro\n4. Sair"))
        switch(opcao){
            case 1:
            salario = Number(prompt("Insira o seu salario"))
            if(salario<210){
                novo = salario * 1.15
            }
            else if(salario <= 600 && salario >= 210){
                novo = salario * 1.10
            }
            else if(salario > 600){
                novo = salario * 1.05
            }
            else{
                alert(`Salario invalido`)
                break
            }
            alert(`Seu novo salario é: ${novo}`)
            break
            case 2:
            salario = Number(prompt("Insira o seu salario"))
            ferias = salario + (salario/3)
            alert(`Seu pagamento de férias é: ${ferias}`)
            break
            case 3:
            salario = Number(prompt("Insira o seu salario"))
            meses = Number(prompt("Insira o numero de meses trabalhados esse ano"))
            if(meses>12){
                alert("ta errado isso ai parça")
                break
            }
            else if(meses<0){
                alert("ta errado isso ai parça")
                break
            }
            decimo3 = (salario*meses)/12
            alert(`Seu decimo terceiro é: ${decimo3}`)
            break
            default: 
            alert(`fim`)
        }
    }while(opcao!=4)
}
function ex10(){
    function ex10(num) {
        if (num < 2) {
          return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
              return false;
            }
        }
        return true;
      }
      
      let numero;
      let somaPares = 0;
      let somaPrimos = 0;
      
      for(let i = 0; i < 10; i++) {
        numero = Number(prompt(`Digite o número ${i + 1}`));
      
        if(numero % 2 === 0) {
            somaPares += numero;
        }
      
        if(ehPrimo(numero)) {
            somaPrimos += numero;
        }
        
      
      alert(`A soma dos números pares é: ${somaPares}, e a soma dos números primos é: ${somaPrimos}`);
      
    }
}
function ex11(){
    let valor = Number(prompt(`Insira o valor do seu carro`))
    let precofinal
    let qntdparcelas
    let porcentagem
    let valorparcela
    let vistaouparcela = prompt(`O carro será a vista ou parcelado? V para a vista, P para parcelado`).toUpperCase()
    if(vistaouparcela == "V"){
        precofinal = valor * 0.80
        alert(`O seu carro a vista irá custar ${precofinal}`)
    }
    else if(vistaouparcela == "P"){
        qntdparcelas = Number(prompt("Quantas parcelas?\n6\n12\n18\n24\n30\n36\n42\n48\n54\n60"))
        porcentagem = (qntdparcelas/6) * 3
        precofinal =  (valor *(porcentagem/100))+valor
        valorparcela = precofinal/qntdparcelas
        alert(`O preço do seu carro é: ${precofinal}\nA quantidade de parcelas é: ${qntdparcelas}\nO valor de cada parcela é: ${valorparcela}`)
    }
}