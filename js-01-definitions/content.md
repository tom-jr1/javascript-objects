# JavaScript Objects
Em JS os objetos são a realeza, se voce entende objetos vc entende o JS.
Em JS quase tudo é um objeto.
- Booleans podem ser objetos (se definido com keyword __new__)
- Numbers podem ser objetos (se definido com keyword __new__)
- String podem ser objetos (se definido com keyword __new__)
- Date sempre são objetos 
- Maths sempre são objetos 
- Expressões regulares sempre são objetos 
- Arrays sempre são objetos
- Functions sempre são objetos
- Objetos sempre são objetos

Tudo exceto primitivo são objetos

## JS Primitive
as primitivas em JS são valores que não tem propriedades ou métodos 
JS define 7 types de primitivos:

- string 
- number
- boolean
- null
- undefined
- symbol
- bigint


    Valores primitivos são imutáveis e não podem ser modificados
    se x = 3.14, voce pode mudar o valor de x, mas não o valor de 3.14

Valor | tipo | Comentário
|--|--|--|
'Hello' | string | 'hello' é sempre 'hello'|
3.14|number| 3.14 sempre será 3.14|
true| boolean| true sempre será true|
false | boolean| false sempre será false|
null| null(object)| null sempre será null|
undefined|undefined|undefined sempre será undefined|

## Objetos são variáveis

Js var podem ter apenas valores únicos
~~~ javascript
let person = 'Jesse P';
~~~
Obs: esse objeto acima não pode conter extensão(adição de property). Pois continuará apresentando undefined mesmo definindo a propriedade;
~~~ javascript
let person = 'Tom';
console.log(person.age); //output: undefined
person.age = 90; 
console.log(person.age); //output: undefined

~~~ 

JS var podem conter vários valores

Objects são variáveis tbm. Mas objetos podem conter vários valores
valores de objetos podem ser escrito como: as pares de __name : value__ 

~~~ javascript
const person = {
    firstName: 'Jesse',
    lasName: 'Pink',
    age: 45,
    eyeColor: 'red'

};
~~~

## Object properties
Os nomes dos valores são chamados de __properties__ em JS 
properties podem ser primitivos, functions e até outros objetos 
um method object é um object que contem definição de function

|Properties| Values|
|--|--|
|firstName|'Jesse'|
|lastName|'Pink'|
|age|45|
|eyeColor|'red'|
|fullName| function() {return `${firstName} ${lastName}`}|

## Criado um objeto JS

com JS podemos definir nossos próprios objetos 
Existem diferentes caminhos de se criar
- usando um objeto literal
- usando keyword __new__
- definindo um object factory para gerar objetos 
- usando __Object.create()__


### Objeto literal
mode more easy to create a object 
com o literal voce pode criar e definir o objeto em um statement apenas
Um objeto literal é uma lista de pares de __property: value__ dentro de chaves

~~~ javascript
const person = {firstName: 'Jesse', lasName: 'Pink', age: 45, eyeColor: 'red'};
~~~

A edentação não diferencia no resultado
este exemplo cria um objeto vazio e depois add 4 properties a ela

~~~ javascript
const person = {}
person.firstName = 'Jesse';
person.lastName = 'Pink';
person.age = 45;
person.eyeColor: 'red';
~~~

### Usando a keyword new

O exemplo abaixo cria um objeto com o __new__ depois add 4 properties

~~~ javascript
const person = new Object();
person.firstName = 'Jesse';
person.lastName = 'Pink';
person.age = 45;
person.eyeColor: 'red';
~~~

Semelhante ao inline com apenas a diferença do uso de __new Object()__

## JS objects são mutáveis

objetos são endereçados por referencia e não valores
se _person_ é um objeto o statement não ira criar uma copia de _person_

~~~ javascript
const x =  person;
~~~

x e person iram apontar agora para o mesmo objeto
qualquer mudança em uma das refs sera visível para a outra ref

~~~ javascript
const person = {
    firstName: 'Jesse',
    lasName: 'Pink',
    age: 45,
    eyeColor: 'red'

};

x = person;
x.age = 49;

console.log(person);
~~~
