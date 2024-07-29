export function padNumber(x:number){
    let paddedNum = String(x).padStart(2,"0")
    return paddedNum
}

export function splitTextToLetters({
    text
}:{
    text:string
}):string[]{
    return text.split('')
}

export function splitText({text}:{
    text : string
}): string[]{
    const splitted = text.split(" ")
    return splitted
}