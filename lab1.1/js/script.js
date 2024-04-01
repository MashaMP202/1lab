alert('Калькулятор квадратных уравнений вида Аx^2+Bx+C=0');
let a = prompt('Введите значение A =',1);
if (a === null || a === '' || a == 0 || isNaN(a) ){
	alert(" число A не может быть пустным,буквенным или равняться 0");
} else {
let b = prompt('Введите значение B =',0);
if (b == null || b === '' || isNaN(b)){
	alert("число B надо ввести и оно не может быть буквенным!");
}else{
let c = prompt('Введите значение C =',0);
if (c == null || c === '' || isNaN(c)){
	alert("число C надо ввести и оно не может быть буквенным!");
}else{
a = parseFloat(a.replace(',', '.'));  
b = parseFloat(b.replace(',', '.'));  
c = parseFloat(c.replace(',', '.'));  
let D = b*b-4*a*c;
let x1, x2;
if(D > 0){
	x1 = (-b+Math.sqrt(D))/(2*a);
	x2 = (-b-Math.sqrt(D))/(2*a);
	alert(`D = ${D.toFixed(2)}`);
	alert(`x1 = ${x1.toFixed(2)}`);
	alert(`x2 = ${x2.toFixed(2)}`);
	
} 
else if (D==0){
	x1 = -b/(2*a);
	alert(`D = ${D.toFixed(2)}`);
	alert(`x1 = ${x1.toFixed(2)}`);
} else if (D < 0){
	D = D*(-1);
	D1 = Math.sqrt(D);
	D1 = (D1)/(2*a);
	D1 = D1.toFixed(2);
	x1 = (-b)/(2*a);
	x2 = (-b)/(2*a);
	D = D*(-1);
	alert(`D = ${D.toFixed(2)}`);
	alert(`x1 = ${x1}+${D1}i`)
	alert(`x2 = ${x2}-${D1}i`)

	} 
	}
	}
	}