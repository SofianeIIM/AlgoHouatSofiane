let prénoms = ["Marc" , "Fabrice" , "Quentin" , "Elliot" , "Patricia" , "Jean" , "Romain" , "Alexandre" , "Bruno" , "Ines"]




class Jason{
    constructor(name , hp, atq){
        this.name = name
        this.hp = hp
        this.atk = atq
    }
    attackJason() {
        if (this.isLucky()) {
            
            this.hp - 10
            console.log(random + "à bien esquivé ! Il lui reste" + this.pv)
        }else {
            this.hp - 15
            console.log(random + "meurt en infligeant de gros dégat à Jason ! Il lui reste" + this.pv)
        }
    }
    
} 

class Personnages{
    constructor(pv){
        
        this.pv = pv
        this.luck = luck
    }
    
}




let random = prénoms[Math.floor(Math.random()*10)]
let jason = new Jason ("Jason" , 100, 1) 
let personnage = new Personnages (5)

//console.log (Jason)
//console.log(random)

