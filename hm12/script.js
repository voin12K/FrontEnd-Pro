function createHash(key, secret) {
    const kayToHash = key + secret;
    let hash = 0;
    for (let i = 0; i < kayToHash.length; i++) {
        const char = kayToHash.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return String(hash);
}

const key = prompt('Enter some key');
const secret = 'someSecret';

const key1 = createHash(key, secret);
console.log(key1);

const key2 = createHash(key, secret);
console.log(key2);

const key3 = createHash(key, secret);
console.log(key3);
