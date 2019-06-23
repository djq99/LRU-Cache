class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key){
        const value = this.map.get(key);
        if(typeof value === "undefined"){
            return -1;
        }
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key, value){
        let obj = {};
        if(this.map.has(key)){
            obj.key = key;
            obj.value = this.map.get(key);
            this.map.delete(key);
        }
        this.map.set(key, value);
        const keys = this.map.keys();
        if(this.map.size > this.capacity){
            obj.key = keys.next().value;
            obj.value = this.map.get(obj.key);
            this.map.delete(obj.key);
        }
        return obj;
    }
}

module.exports = LRUCache;