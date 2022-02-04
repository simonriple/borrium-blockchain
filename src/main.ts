import { Block } from "./block"
import { blockChain } from "./blockchain"
import { Trade } from "./trade"

console.log('hello world')

const blockchain = new blockChain()

// const block = new Block("hello", 4)

const trade = new Trade("simon", "mats", "book")
blockchain.addBlock(trade)

const valid = blockchain.validate()
console.log(valid)
blockchain.chain[1].trade = new Trade("simon", "Endre", "book")
blockchain.chain[1].hash = "mutate"

console.log(blockchain.validate())