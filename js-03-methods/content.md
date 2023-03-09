# Js Object Methods

~~~ javascript
const person = {
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    id: 500,

    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
~~~

## O que é o _this_
Em JS o __this__ refere-se a um objeto
Qual objeto?
Depende de como o __this__ é chamado
||
|--|
| Em método de objeto, representa o próprio objeto|
|Sozinho ele representa o __objeto global__|
|function, ele representa o __objeto global__|
|Em uma função no mode restrito, __this__ é undefined|
|Em um event,  __this__ refere-se ao elemento recebido do event|
|Métodos como __call()__, __apply()__ e __bind()__ podem referenciar __this__ a qualquer objeto|

# Acessando Métodos de Objetos
Nos acessamos métodos de objetos com a seguinte sintaxe:

~~~ javascript
object.methodName();
~~~
Nos iremos normalmente descrever methodName como um método de object
methodName é a property que quando chamada com __()__ executa a function
Se acessarmos sem __()__ sera apresentado apenas a definição da function

~~~ javascript
object.methodName;
~~~

## Adicionando método a um objeto

Simples

~~~ javascript
objectName.property = function () {
    //codeblock
    }
~~~

## Usando métodos integrados em um object method
Podemos tranquilamente usar métodos do 'util' do JS
~~~ javascript
const person = {
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    id: 500,

    fullName: function () {
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName.toUpperCase();
    }
}
~~~