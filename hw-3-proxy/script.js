let parentArray = [];
let proxyingArr = new Proxy(parentArray, {
    set(target, index, value) {
        if (typeof value !== 'object') return console.warn('Value is not an object.')
        if (Object.getPrototypeOf(value)) return  console.warn('Object has not a prototype')
        return target[index] = value;
    },
    get(target, value) {
        return JSON.stringify(target[value]);
    },
});
console.log(proxyingArr);
proxyingArr[0] = Object.create(null);
proxyingArr[1] = 1;
proxyingArr[2] = {name: 'Ilya'}
console.log(typeof proxyingArr[2], proxyingArr[2])
proxyingArr.push({});
