
2. function diffObjects(oldObj, newObj) {
  const diff = {
    added: {},
    removed: {},
    changed: {}
  };

  for (const key in newObj) {
    if (!Object.prototype.hasOwnProperty.call(newObj, key)) continue;

    if (!Object.prototype.hasOwnProperty.call(oldObj, key)) {
      diff.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      diff.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  for (const key in oldObj) {
    if (!Object.prototype.hasOwnProperty.call(oldObj, key)) continue;

    if (!Object.prototype.hasOwnProperty.call(newObj, key)) {
      diff.removed[key] = oldObj[key];
    }
  }

  return diff;
}
console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))


4. function createCounter() {
 let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },  
    get value() {
      return count;
    }
  };
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible

5. function validateSchema(obj, schema) {
  const errors = [];

  for (const key in schema) {
    if (!Object.prototype.hasOwnProperty.call(schema, key)) continue;

    const expectedType = schema[key];
    const hasKey = Object.prototype.hasOwnProperty.call(obj, key);

    if (!hasKey) {
      errors.push(`${key}: missing property`);
      continue; 
    }

    const actualType = typeof obj[key];

    if (actualType !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
    }
  }

  return errors;
}

const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']
