let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53

let total =  (sp + rj + mg + es + outros) 

let porcentagemSp =  (sp / total) * 100
let porcentagemRj =  (rj / total) * 100
let porcentagemMg =  (mg / total) * 100
let porcentagemEs =  (es / total) * 100
let porcentagemOutros =  (outros / total) * 100


console.log(`São Paulo tem uma porcentagem de ${porcentagemSp.toFixed(2).replace('.',',')}% ao mês. 
Rio de Janeiro tem uma porcentagem de ${porcentagemRj.toFixed(2).replace('.',',')}% ao mês. 
Minas Gerais tem uma porcentagem de ${porcentagemMg.toFixed(2).replace('.',',')}% ao mês. 
Espirito Santo tem uma porcentagem de ${porcentagemEs.toFixed(2).replace('.',',')}% ao mês.
Outros estados têm uma porcentagem de ${porcentagemOutros.toFixed(2).replace('.',',')}% ao mês.`)
