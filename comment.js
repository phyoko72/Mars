const cmt = "Commented by Phoe La Pyae"
console.log(cmt)

function printCmt(comment) {
    // const [first, ...others] = comment.split("")
    // return first.toUpperCase().concat(others.join(""))
    return comment.charAt(0).toUpperCase() + comment.slice(1)
}
const capitalizedResult = printCmt("canada")
console.log(capitalizedResult)
