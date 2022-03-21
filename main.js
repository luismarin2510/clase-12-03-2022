///////////////* uso basico del for  *///////////////
for (let i=0; i<=3; i++) {
    console.log(`hola mundo ${i}`); 
}
///////* for con la condicion de incremento externo *//////////////
for (let i=0; i<=3;) {
    console.log(i);
    i++;
}
/////* otra forma de for *//////////////
let x=0;
for(x; true;){
    if (x<3) {
        console.log(`ciclo personalizado ${x}`);
        x++;
    } else {
        break;
    }
}
////////////*  for (in)*/////////////
/////// solo usa el indice "posicion" del dato en el array/////////////
for (let i in ["miguel","juan","luis"]) {
    console.log(i);
    }

////////////*  for (of)*/////////////
///////// saca el dato dentro del array ////////////////
for (let i of ["miguel","juan","luis"]) {
    console.log(i);
    }
///////////////* extensiones */////////
let data = new Array(3).fill(null);
Object.preventExtensions(data);
data.fill("luis",3);
console.log(data);

////////////* foreach *///////////////
data.forEach(function(v,i){
    console.log(i);
});
///////////* variacion de datos  */

////////** saca las entidades con entries */////
Object.entries(data).forEach(function(i){
    console.log(i);
});
///////////* saca los indices con keys *//////////
Object.keys(data).forEach(function(i){
    console.log(i);
});
///////////* saca los valores */////////////
Object.values(data).forEach(function(i){
    console.log(i);
});
//////////////////* clonar valores  */
Object.values(data).forEach(function(clone){
    console.log(clone);
});
//////////////* datos map *////////////
let datos = data.map(function(v,i){
    if(v==null){
        return i+2;
    }else{
        return v;
    }
})
console.log(data);
console.log(datos);
////////////////**//////////////////
