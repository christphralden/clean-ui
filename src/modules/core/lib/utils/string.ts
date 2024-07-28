export function padNumber(x:number){
    let paddedNum = String(x).padStart(2,"0")
    return paddedNum
}