# Display

## Como exibir objetos em JS
Em contexto de navegador caso tentarmos exibir um objeto em um elemento
html ele sera exibido de tal forma: *[object Object]*

~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;
~~~

Formas comum de se exibir objetos JS são
- exibir object property by name
- exibir object properties by a loop
- exibir object usando Object.values()
- exibir object usando Json.stringify()

### Exibindo propriedade
~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name, person.age, person..city);
~~~

### In Loop

~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const p in person) {
    console.log(person[p]);
}
~~~

### Usando Object.values()

Qualquer objeto JS pode ser convertido em array usando o *Object.values()*

~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Objects.values(person);
console.log(myArray);
~~~


### Usando JSON.stringify()

Qualquer Objeto js pode ser stringified(convertido para uma string) com a 
função *JSON.stringify()*

~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myString = JSON.stringify(person);
console.log(myString);
~~~

Stringify datas:
~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  today: new Date()
};

const myArray = person.values();
~~~

Stringify arrays:
~~~ javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  myArr: ['A', 'B', 'C']
};

const myArray = person.values();
~~~
Obs: functions não são convertidas