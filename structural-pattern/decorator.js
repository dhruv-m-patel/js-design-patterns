// decoratorsBeforeExport: false
export function readonly(value){
  return function(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  @readonly(true)
  meow() {
    return `${this.name} says Meow!!!`;
  }
}

const garfield = new Cat();
console.log(garfield.meow());

garfield.meow = function() {
  console.log('this should never occurr');
}
// below should never execute
garfield.meow();