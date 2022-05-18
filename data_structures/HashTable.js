class HashTable {
    constructor(size = 7) {
        this.table = new Array(size);
    }

    set(key, value) {
        const index = this._hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        this.table[index].push([key, value]);
        return this;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.table.length;
        }
        return hash;
    }

    get(key) {
        const index = this._hash(key);

        if (!this.table[index]) {
            return null;
        }

        const items = this.table[index];
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] == key) {
                return items[i][1];
            }
        }

        return null;
    }

    keys() {
        const allKeys = [];

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    allKeys.push(this.table[i][j][0]);
                }
            }
        }

        return allKeys;
    }
}

let hashTable = new HashTable();
hashTable.set('bolts', 1000);
hashTable.set('washers', 500);
hashTable.set('lumber', 50);
hashTable.set('hammers', 200);
