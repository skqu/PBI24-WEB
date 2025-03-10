{
var global = "global";
let scope = "scope";
}


function clb_clickme()
{
    let hello = "hello";
    var whitespace = " ";
    const world = "world";
    console.log(hello + whitespace + world + whitespace + global)
    world = "Not World"; // Not allowed to do this
    console.log(hello + whitespace + world + whitespace + global + whitespace + scope) // We cannot access scoped variable
}