# JS Properties
Propriedades são as partes mais importantes de qualquer objeto JS.

## JS Properties
Properties são valores associados a um objeto JS.
Objects JS são uma coleção de propriedades não ordenadas
Propriedades podem ser modificadas, adicionadas e deletadas. Mas algumas são apenas de leitura.

## Acessando uma JS property
Syntax para acessar uma propriedade:
~~~ javascript
objectName.property // person.age
||
objectName['property'] // person['age]
||
objectName[expression] // x = 'person'; person[x];
~~~

## JS for in Loop

O for in realiza um loop entre as properties de um objeto.

~~~ javascript
const person = {
    firstName: 'Jesse',
    lasName: 'Pink',
    age: 45,
    eyeColor: 'red'

};

for (const p in person) {

    console.log(person[p]);
}
~~~

## Adicionando nova Property
Podemos add novas propriedade simplesmente com atribuição do valor
Assumindo que o objeto person já existe podemos lhe atribuir uma property nova assim:

~~~ javascript
person.nationality = 'American';
~~~

## Deletando property
A keyword __delete__ deleta a property do objeto:

~~~ javascript
delete person.age;
||
delete person['age'];
~~~

A keyword delete deleta a ambos valores, property e value. Assim a property não será mais utilizável
a não ser que seja add novamente.
A keyword delete é utilizada em objetos não tendo efeito em variáveis e functions

## Aninhamento de Objects
Valores em objetos podem ser outro objeto:

~~~ javascript
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
~~~
Podemos acessar nossos objects por meio do DOT ou De bracket notation:

~~~ javascript
myObj.cars.car1;
||
myObj.cars['car2'];
||
myObj['cars']['car3']
~~~

## Arrays e objects aninhados
Valores em arrays podem ser objetos e vice-versa


~~~ javascript
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
~~~

## Property Atributo
Todas as propriedades tem um nome. E Tbm tem seu valor
O valor é dos atributos de propriedade
Outros atributos são : enumeráveis, configuráveis e graváveis
Estes atributos definem como as propriedades podem ser acessadas.
Em JS todos os atributos podem ser lidos, mas apenas o valor de atributo pode ser modificado( apenas se a property for writable)
