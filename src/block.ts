import sha256 from 'crypto-js/sha256'
import { Trade } from './trade'

export class Block {
    hash:string
    trade: Trade|null
    difficulty: number
    nonce: number
    prevHash: string

    constructor(trade: Trade|null, prevHash: string, difficulty: number){
        this.trade = trade
        this.prevHash = prevHash
        this.difficulty = difficulty
        this.nonce = 0
        this.hash = this.mine()

    }

    generateHash(){
        return sha256(JSON.stringify(this.trade)+this.prevHash+this.difficulty+this.nonce).toString()
    }
    mine(){
        console.log('mining')
        let hash = this.generateHash()
        // Bug from workshop
        // while(hash.slice(0, this.difficulty) !== Array(this.difficulty).join("")){
        while(hash.slice(0, this.difficulty) !== Array(this.difficulty+1).join("0")){
            this.nonce +=1 
            hash = this.generateHash()
        }
        return hash
    }
}