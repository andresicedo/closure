# Closure

> This repository gives an explanation of closure and its use within Javascript. It also provides a detailed response when your asked about closure during a job interview.

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

What do we know about closure?
Closure is the ability to access variables that are out of scope of the 
current function. In other words, child functions having access to all parent function variables and scope; a function that remembers its outer variables and can access them. .

When you have a function defined inside of another function, the inner function 
has access to the variables and scope of the outer function. Even if the outer function finishes executing and those variables are no longer 
accessible outside that function.

In some languages, that's not possible, but in Javascript, all functions are 
naturally closures with only one exception(the new function syntax). That is, 
they automatically remember where they were created using a hidden [[Environment]] 
property and then their code can access outer variables.


In an interview, when you're asked what a closure is, a valid answer would be:

A closure is a function that remembers its outer variables and can access them. 
In some languages, that's not possible, but in Javascript, all functions are 
naturally closures. That  is, they automatically remember where they were created 
using a hidden [[Environment]] property and then their code can access outer 
variables. When you have a function defined inside of another function, the inner 
function has access to the variables and scope of the outer function. Even if the 
outer function finishes executing and those variables are no longer accessible 
outside of that function.

### Technologies

- Javascript

[Back To The Top](#Closure)

---

## How To Use

- The JS file in the repository gives an example of how closure works within Javascript.


## References

[Additional Resources](https://javascript.info/closure)

## License

* [MIT](https://opensource.org/licenses/MIT)

[Back To The Top](#Closure)

## Author Info

- Website - [AndresIcedo.com](https://AndresIcedo.com/)
- LinkedIn - [andres-icedo](https://www.linkedin.com/in/andres-icedo/)
- GitHub - [andresicedo](https://github.com/andresicedo)


[Back To The Top](#Closure)
