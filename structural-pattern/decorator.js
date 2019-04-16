// decoratorsBeforeExport: false
export function readonly(value){
  return function(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
  }
}

export class Cat {
  constructor(name) {
    this.name = name;
  }

  @readonly(true)
  meow() {
    return `${this.name} says Meow!!!`;
  }
}