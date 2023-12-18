var numUniqueEmails = function (emails) {
    let res = new Set()
    for (let i = 0; i < emails.length; i++) {
        let resToAdd = emails[i].split("@")
        resToAdd[0] = resToAdd[0].replaceAll(".", "")
        resToAdd[0] = resToAdd[0].split("+")
        res.add(`${resToAdd[0][0]}@${resToAdd[1]}`)
    }
    return res.size
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))
