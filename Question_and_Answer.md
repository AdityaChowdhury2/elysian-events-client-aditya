<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here greeting is declared as a let variable but assigned an empty object to greetign. As greetign is initialized as an empty object so, in 3rd line it will be logged {}. As it doesn't initialized with any variable declaration keyword so it has global scope.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
	return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here a is number but b is passed as string. Javascript use '+' to concat two string so, when b passed as string it will be concatinated with 1. so the answer is</i> `'12'`.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here food array has 4 types of food. then the info object's property favoriteFood referenced the food[0]. this means info initialized with the value of food[0] it mean's "🍕" and this is constant. But as we know object is non-primitive datatype so it doesn't show any error when we try to change the property of the info and the new value "🍝" assigned to the info's favoriteFood property. Finaly food is printed as it declared. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
	return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When a variable is declared but not initilized explicitly javascript always initilized the variable as undefined. Here sayHi() is called without any arguments and it expects a value as parameter but got nothing, so it will prints</i> `Hi, there, undefined`.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here we can see nums array will traverse all the array element and if the num is true then count will increase by 1. For 0th index nums[0] = 0 , which is falsy value so the loop will continue without increasing count value. then, For 0th index nums[1] = 1 , it's a truthy value so if statement passed the condition and count value will increase by one. so count = 1.
nums[2] = 2, it's also truthy, count = 2,
and finally, nums[3] = 3, it's also truthy, count = 3,
so, the answer is 3.
</i>

</p>
</details>
