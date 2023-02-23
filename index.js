let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger.com', 'racoon.net'];
let domainNamesList = document.getElementById('domainNames');

for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
        for(let k = 0; k < nouns.length; k++) {
            let domainName = document.createElement('li');
            domainName.textContent = pronouns[i] + adjectives[j] + nouns[k];
            domainNamesList.appendChild(domainName);
        }
    }
}

console.log("Hello World")
gi