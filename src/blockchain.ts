import { Block } from "./block"
import { Trade } from "./trade"

export class blockChain {

    chain:Block[]
    difficulty = 4

    constructor(){
        this.chain = [new Block(null,"genesishash",this.difficulty)]
    }

    addBlock(trade: Trade){
        
        const prevHash = this.chain[this.chain.length-1].hash
        const block = new Block(trade, prevHash,this.difficulty)
        this.chain.push(block)
    }

    validate(){
        console.log("in validate")
        for(let i = 1; i < this.chain.length; i++){
            const prevBlock = this.chain[i-1]
            const currBlock = this.chain[i]
            console.log(prevBlock, currBlock)

            if(currBlock.prevHash !== prevBlock.hash)
                return false
            
            if(currBlock.hash !== currBlock.generateHash())
                return false
        }
        return true
    }
}