export class Oberserve{
    constructor(value){
        this.value=value
        if(Array.isArray(value)){

        }else{
            this.walk(value)
        }
    }
    walk(obj){
        for(let keys in obj){
            defineReactive(obj,keys)
        }
    }
}

function defineReactive(obj,keys,val){
    val = obj[keys]
    if(typeof val === 'object'){
        new Oberserve(val)
    }
    Object.defineProperty(obj,keys,{
        get(){
            return val
        },
        set(newVal){
            val=newVal
        }
    })
}

