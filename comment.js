const cmt = "Commented by Phoe La Pyae"
console.log(cmt)

function printCmt(comment) {
    const [first, ...others] = comment.split("")
    return first.toUpperCase().concat(others.join(""))
}
console.log(printCmt("canada"))
