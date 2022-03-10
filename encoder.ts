const abc : Array<string> = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function findIndex (el : string, arr : Array<string>) {
    let index : number = -1
    arr.forEach( (arrEl : string, i : number) => { if (el == arrEl) return index = i });
    return index
}

if (Deno.args[0] == "caesar") {
    let key : string = Deno.args[1];
    let message : string = [...Deno.args].splice(2).join(" ");
    let messageArr : Array<string> = message.split("");
    let codedArr : Array<string> = []
    messageArr.forEach(char => {
        let charIndex : number = findIndex(char, abc)
        if (charIndex == -1) return codedArr.push(char);
        let index : number = parseInt(key) + charIndex;
        while (index >= abc.length) index -= abc.length;
        codedArr.push(abc[index]);
    });
    console.log(codedArr.join(""))
} else if (Deno.args[0] == "num") {
    let message : string = [...Deno.args].splice(1).join(" ");
    let messageArr : Array<string> = message.split("");
    let codedArr : Array<string> = []
    messageArr.forEach(char => {
        if (char == " ") return codedArr.push("-");
        let charIndex : number = findIndex(char, abc);
        if (charIndex != -1) return codedArr.push((charIndex + 1).toString());
        else return codedArr.push(char);
    });
    console.log(codedArr.join("/"))
}