export class Trade {
    from: string
    to: string
    item: string

    constructor(from: string, to: string, item: string){
        this.from = from
        this.to = to
        this.item = item
    }
}