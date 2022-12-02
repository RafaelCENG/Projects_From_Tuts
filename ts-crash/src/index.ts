// Basic Types
let id: number = 5
let company: string = 'Strike'
let isPublished: boolean = true
let x: any = 'Hello'

// Arrays & Tuples

//Arrays
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Strike', false]
// Tuple Array
let employee: [number, string][]
employee = [
	[1, 'Strike'],
	[2, 'John'],
	[3, 'Strike'],
]

// Unions & Enums

// Unions
let pid: string | number
pid = 22
pid = '22'

// Enum
enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right,
}

console.log(Direction1.Down) // 2 Default : 0,1,2,3

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

// Objects

type User = {
	id: number
	name: string
}

const user: User = {
	id: 1,
	name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid // 1st way
let customerId = cid as number // 2nd way

// Functions
function addNum(x: number, y: number): number {
	return x + y
}

function log(message: string | number): void {
	console.log(message)
}

// Interfaces
interface UserInterface {
	readonly id: number // readonly property
	name: string
	age?: number // ? = optional
}

const user1: UserInterface = {
	id: 1,
	name: 'John',
}

type Point = number | string // Cant use interface in this example
const p1: Point = 1

interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person implements PersonInterface {
	id: number // public by default, private, protected
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	register() {
		return `${this.name} is now registered`
	}
}

const brad = new Person(1, 'Brad')
console.log(brad)
console.log(brad.register())

// We can use interface with classes
interface PersonInterface {
	id: number // readonly property
	name: string
	register(): string
}

// Subclasses
class Employee extends Person {
	position: string
	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, 'Raf', 'Developer')
console.log(emp.name)
console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

// numArray.push('hello') // Now we have an error
