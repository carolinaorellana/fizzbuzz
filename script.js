//Funcion para que se imprima del 1 al 100
//Si es multiplo de 3 fizz
//si es multiplo de 5 buzz
//si es multiplo de 3 y 5 buzz

for ( var i=1; i<=100; i++){
    if (i%3==0 && i%5==0){
        console.log("Fizzbuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}