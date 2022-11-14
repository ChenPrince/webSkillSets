在确保我们创建的变量不会泄露至全局变量中，我们以前曾采用过这种代码组织形式：

(function(someObj){
    someObj.age = 18;
})(someObj || someObj = {});
 
但在基于文件模块的项目中，我们无须担心这一点，此种方式，适合用于合理的函数逻辑分组中，在 TypeScript 中，提供了 namespace 关键字来描述这种分组，在 typescript 编译器进行编译过后，命名空间也就被编译成了上述示例那样的代码。

命名空间的声明
TypeScript 的命名空间只对外暴露需要在外部访问的对象，命名空间内的对象通过 export 关键字对外暴露，比如我们在一个名叫 utils.ts 的文件里声明一个命名空间：

// utils.ts
namespace Utils {
    export interface IPerson {
        name: string;
        age: number;
    }


命名空间的使用
通过 namespace 关键字声明命名空间，在命名空间外部需要通过完全限定名访问这些对象，通常情况下，声明的命名空间代码和调用的代码不在同一个文件里，因此在其他文件中使用，注意引入的路径要写正确，此处我们在同级目录中任意一个 ts 文件中使用我们刚定义的命名空间：

/// <reference path="utils.ts" />
const me: Utils.IPerson = {
    name: 'funlee',
    age: 18
}
console.log(me); // {name: 'funlee', age: 18}
 
如上述代码所示，通过 reference 注释引用命名空间，即可通过完全限定名进行访问，我们也可以通过 import 导入模块的形式，引入命名空间：

import './utils'
 
const me: Utils.IPerson = {
    name: 'funlee',
    age: 18
}
console.log(me); // {name: 'funlee', age: 18}
 
多文件的命名空间
就像普通的 JS 模块文件可以相互引用一样，包含 namespace 的命名空间文件也可以相互引入，还可以组合成一个更大的命名空间，下面是一个简单的示例，所有文件都在同一目录下，你也可参考官方示例：

utils.ts

namespace Utils {
    export interface IAnimal {
        name: string;
        say(): void;
    }
}
animal.ts

/// <reference path="utils.ts" />
 
export namespace Animal {
    export class Dog implements Utils.IAnimal{
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        say() {
            console.log(`${this.name}: 汪汪汪`)
        }
    }
}
index.ts

import {Animal} from './animal';
 
const he = new Animal.Dog('Jack');
he.say(); // Jack: 汪汪汪
