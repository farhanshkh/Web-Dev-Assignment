if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (searchElement) {
        return this.indexOf(searchElement) !== -1;
    };
}

const array = [1, 2, 3, 4, 5];
console.log(array.customIncludes(3));
console.log(array.customIncludes(6));
