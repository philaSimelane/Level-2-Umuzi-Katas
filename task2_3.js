function columns(words) {
    const maxLength = Math.max(...words.map(item => item.length));

    const storeUptoMax = new Array(maxLength).fill("");
    for (let char = 0; char < maxLength; char++) {
        let temp = "";
        for (let word = 0; word < words.length; word++) {
            if (words[word].length > char) {
                temp += words[word][char];
            } else {
                temp += " ";
            }
        }
        storeUptoMax[char] = temp.split("").join(" ");
    }
    const column = storeUptoMax.join("\n");

    console.log(column);
}
columns(["write", "good" ,"code", "everday"])
module.exports = { columns };

