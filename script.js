
function calcular(){
    var ta = window.document.getElementById('n1')
var tb = window.document.getElementById('n2')
var tc = window.document.getElementById('n3') 
var d = window.document.getElementById('d')


var a = Number(ta.value)
var b = Number(tb.value)
var c = Number(tc.value)
var del = Number(d.value) 
 del = b * b - 4 * a * c;
 x1 = (-b + Math.sqrt(del)) / (2 * a);
 x2 = (-b - Math.sqrt(del)) / (2 * a);

if ( b == "" || c == "") {
    alert("Insira os valores de A,B e C")
    limpar()
} else if (a == 0) {
    alert("O valor A deve ser diferente de ZERO")
    limpar()
}
else if(del < 0) {
    alert("O delta é negativo. Equação não possui raízes reais.")
    limpar()
}
else {
 d.innerHTML = `O <strong>&#x394;</strong> da operação é: <strong>${del.toFixed(3)}</strong>;`
 rx2.innerHTML = `O resultado de <strong>x2</strong> é: <strong>{${x1.toFixed(3)}}</strong>`
 rx1.innerHTML = `O resultado de <strong>x1</strong> é: <strong>{${x2.toFixed(3)}}</strong>`
}
}

function limpar(){
    var ta = window.document.getElementById('n1')
    d.innerHTML =""
    rx1.innerHTML = ""
    rx2.innerHTML = ""
    ta.focus();
}