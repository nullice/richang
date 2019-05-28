export function inset(target: any, propertyKey: string) {
    if (!target.insetPropertyKeys) {
        Object.defineProperty(target, "insetPropertyKeys", {
            enumerable: false,
            writable: true,
            value: {}
        })
    }
    ;(<any>target.insetPropertyKeys)[propertyKey] = true
}

export function configurable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value
    }
}

export function writable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value
    }
}

export function defineGlobal(constructor: Function) {
    if (typeof global !== "undefined") {
        ;(<any>global)[constructor.name] = constructor.name
    }
}
