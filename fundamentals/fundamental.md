# Javascript Reading to rivision

This doc will describe some common js fundamentals.

## Object Copying

Javascript 'object' copy is kind of tricky things. When you assign an object to another variable it won't create a new instance of that object, the new created object simply point to the memory address of that object. This is called shallow copy of the object. We can use following approaches to get a new instance or copy without being referencing the object that it's being created.

```
objX = {
    a: 'haha'
}

objY = objX

cosole.log(objY) // { a: 'haha' }

objY.a = 'hoho'

cosole.log(objX) // { a: 'hoho' }
cosole.log(objY) // { a: 'hoho' }

```

### Object.assign

```
objX = {
    a: 'haha'
}
objY = Object.assign({}, objX)

cosole.log(objY) // { a: 'haha' }

objY.a = 'hoho'

cosole.log(objX) // { a: 'haha' }
cosole.log(objY) // { a: 'hoho' }

```