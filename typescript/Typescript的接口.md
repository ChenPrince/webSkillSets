接口只是声明方法和字段，它不能用来建造任何东西。不需要将接口转换为JavaScript来执行，它们对运行时JavaScript没有任何影响。因此，它们的唯一目的是在开发阶段提供帮助。
接口应用在面向对象的编程中；是一种规范的定义；是一种约束。
与java类似的，java检查对象类型，而ts检查内容属性

interface interface_name {    
          // 字段声明
          // 方法声明
}    


属性接口

				
        function shuxing(sxinfo:{a:string}){
            console.log(11)
        }
        shuxing({a:''})
        //一个对传入参数的约束；传入的参数键key必须叫做a；值value必须是string类型；
        //mytry
        function shuxing(a:string){
            console.log(11)
        }
        shuxing('')
			
			
一个对于对象的约束

			
        interface aObj{    //这个感觉就像是自定义类型了；
            name:string;
            age:number;
            work?:string; 问号依然表示传值可选；
        }
        function Fun(obj:aObj){
            console.log(obj)
        }
        let obj = {
            name:'wo',
            age:22    	//此处定义的key必须要和接口名相同；也可以多定义key；但是取不到；取得时候会报错；
        }
        let fn = new Fun(obj)；
        let fn = new Fun({ 也可以直接定义但是直接传递的参数必须要和定义的接口一模一样
        //     name:'wo',
        //     age:22
        // })
        -----------------------
        function Fn(a:aObj){
            console.log(222)
        }  //定义的一个接口可以供多个方法调用；
    
			
一个对于函数的约束接口

			
        interface hanshu{
            // (arg1:string,arg2:string):string;//这个代码块里面就是对于函数的约束；
            (arg1:string,arg2:string, arg3:?any):void;//不需要返回值的时候函数中什么类型都可以；
        }
        let fn:hanshu = function(a:string,b:string):number{
            return 1
        }
			
			
可索引接口

			
        interface mArr{
            [index:number]:string;
        }
        var myArr:mArr=['1,2'];
        var str:mArr = 'sss';
        var obj:mArr = {
            a:1,     这里就会报错了；只能定义索引index是数字的；对象的所以不是数字；
        }
        --------------------
        interface mArr{
            [index:string]:string;   轮到上面的两个类型报错了；
        }
        var myArr:mArr=['1,2'];   X
        var str:mArr = 'sss';			X
        var obj:mArr = {
            a:'1', //注意是字符串；
        }
			
			
类的约束

        关键字implements
        
            interface Animal{
                name:string;
                eat(a:number):boolean;
            }
            class Dog implements Animal{
                name:string;
                constructor(name:string){
                    this.name = name;
                }
                eat(n:number){    		//接口中声明了eat的参数之后；这里不写、实例中也不写参数没有报错
                    return true;
                }
            }
            var d =new Dog('gougou');
            alert(d.eat(1))
            //实际上对属性接口和函数接口的结合使用
				
				
类接口的继承

					
            interface Animal{
                name:string;		//如果不定义name；派生类也可以写name 如果接口定义了name派生类中就必须要写name
                eat(a:number):boolean;
            }
            interface Dog extends Animal{
                play(a:string):void;  		//即使写的void；派生类中也可以有返回值；且不报错；
            }
            class Dog implements Dog{
                eat(n:number){				//X//因为没有写name而报错；
                    return true;
                }
                play(s:string){
                    return false;
                }
            }
            var d =new Dog();
            alert(d.eat(1))
				
				
类的继承实现接口

				
            //接上面的代码
            interface Animal{
                eat(a:number):boolean;
            }
            interface Dog extends Animal{
                play(a:string):void;
            }
            class Animal{				//constructor可以不写；
                live(){}
            }
            class Dog1 implements Dog{
                live(){}            //报错一直提示这里必须要填写上这个方法；查明了原因；因为animal和接口同名；
                eat(n:number){
                    return true;
                }
                play(s:string){
                    return false;
                }
            }
            var d =new Dog1();
            alert(d.eat(1))
        
        
            interface Animal{
                eat(a:number):boolean;
            }
            interface Dog extends Animal{
                play(a:string):void;
            }
            class Animal{
                // constructor(){
                //     //构造是必须的；否则报错；刚才不是这里的错误；
                // }
                live(){}
            }
            class Dog1 extends Animal implements Dog{  //把它继承过来也不报错了’
                eat(n:number){
                    return true;
                }
                play(s:string){
                    return false;
                }
            }
            var d =new Dog1();
            alert(d.eat(1))
				
		



https://blog.csdn.net/w96098/article/details/108326622?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166840162216782391856369%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166840162216782391856369&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-108326622-null-null.142^v63^control,201^v3^control_2,213^v2^t3_esquery_v3&utm_term=ts%20%E4%B8%AD%E7%9A%84interface&spm=1018.2226.3001.4187