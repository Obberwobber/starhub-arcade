/* STARHUB ACADEMY — curriculum data.
   Each lesson: { id, title, mins, content, mentor?, exercise? }
   Exercise:    { prompt, starter, expectLogs?, mustContain?, mustNotContain?, hints? } */

const TRACKS = [

/* ==================== FREE — CODE BASICS ==================== */
{
  id: 'basics', tier: 'free', name: 'Code Basics', icon: '🌱',
  blurb: 'Your first steps: variables, loops, functions — the vocabulary every programmer shares.',
  lessons: [
    {
      id: 'hello', title: 'Your First Program', mins: 5,
      content: `
        <p>A program is just a list of instructions the computer follows, top to bottom.
        The simplest instruction in JavaScript is <code>console.log()</code> — it prints
        a value to the console so you can see it.</p>
        <pre><code>console.log("Hello, World!");</code></pre>
        <p>Text values — called <em>strings</em> — go inside quotes. Everything else in that
        line is an instruction: <code>console.log</code> means "print", the parentheses hold
        what to print, and the semicolon ends the statement.</p>`,
      exercise: {
        prompt: 'Print the exact text <code>Hello, World!</code> to the console.',
        starter: '// Print your first line of output\n',
        expectLogs: ['Hello, World!'],
        mustContain: ['console\\.log'],
        hints: [
          'Use console.log("...") with the text inside quotes.',
          'Copy the example exactly: console.log("Hello, World!");',
        ],
      },
    },
    {
      id: 'variables', title: 'Variables: Naming Things', mins: 7,
      content: `
        <p>A variable is a named box that stores a value. You create one with
        <code>let</code> (changeable) or <code>const</code> (locked in):</p>
        <pre><code>let score = 0;        // can change later
const pilot = "Nova"; // cannot be reassigned

score = 150;          // updating a let variable</code></pre>
        <p>Rule of thumb: use <code>const</code> by default, and switch to
        <code>let</code> only when you know the value will change.</p>
        <p>You can print a variable by passing it to <code>console.log</code>, and join
        strings together with <code>+</code>.</p>`,
      exercise: {
        prompt: 'Create a <code>const</code> named <code>pilot</code> set to <code>"Nova"</code>, then print <code>Pilot: Nova</code>.',
        starter: '// Create a constant and print a greeting\n',
        expectLogs: ['Pilot: Nova'],
        mustContain: ['const\\s+pilot', 'console\\.log'],
        named: { 'const\\s+pilot': 'a const variable named pilot' },
        hints: [
          'const pilot = "Nova"; then print "Pilot: " + pilot',
          'Join the strings: console.log("Pilot: " + pilot);',
        ],
      },
    },
    {
      id: 'numbers', title: 'Numbers & Operators', mins: 6,
      content: `
        <p>JavaScript does math with the operators you already know:</p>
        <pre><code>console.log(4 + 3);   // 7   addition
console.log(10 - 4);  // 6   subtraction
console.log(6 * 7);   // 42  multiplication
console.log(20 / 5);  // 4   division
console.log(17 % 5);  // 2   remainder ("modulo")
console.log(2 ** 10); // 1024 exponent</code></pre>
        <p>Math follows the usual order of operations — multiplication and division
        before addition and subtraction — and parentheses override it.</p>`,
      exercise: {
        prompt: 'Use the multiplication operator to print the number <code>42</code>.',
        starter: '// Print 42 using *\n',
        expectLogs: ['42'],
        mustContain: ['\\*'],
        named: { '\\*': 'the * (multiplication) operator' },
        hints: [
          'console.log(6 * 7) works — or any pair that multiplies to 42.',
        ],
      },
    },
    {
      id: 'strings', title: 'Strings & Template Literals', mins: 7,
      content: `
        <p>Strings are text. You can glue them together with <code>+</code>, but the
        modern way is a <em>template literal</em>: backticks instead of quotes, with
        <code>${...}</code> slots that get filled in:</p>
        <pre><code>const ship = "Odyssey";

// old way: concatenation
console.log("Boarding " + ship + "!");

// new way: template literal
console.log(\`Boarding \${ship}!\`);

console.log(ship.length); // 7 — strings know their length</code></pre>
        <p>Anything inside <code>${ }</code> is evaluated as code, so
        <code>\`2 + 2 = \${2 + 2}\`</code> prints <code>2 + 2 = 4</code>.</p>`,
      exercise: {
        prompt: 'Create a <code>const ship</code> equal to <code>"Odyssey"</code>, then use a template literal to print <code>Boarding Odyssey</code>.',
        starter: '// Template literals use backticks and ${ }\n',
        expectLogs: ['Boarding Odyssey'],
        mustContain: ['`', '\\$\\{'],
        named: { '`': 'a template literal (backticks)', '\\$\\{': 'a ${ } slot' },
        hints: [
          'const ship = "Odyssey"; then console.log(`Boarding ${ship}`);',
        ],
      },
    },
    {
      id: 'booleans', title: 'Decisions: if / else', mins: 8,
      content: `
        <p>Programs get interesting when they can make decisions. Comparisons produce
        <em>booleans</em> — <code>true</code> or <code>false</code>:</p>
        <pre><code>fuel < 20     // less than
hp === 0      // exactly equal (use ===, not =)
shields !== 100  // not equal</code></pre>
        <p>An <code>if</code> statement runs its block only when the condition is true;
        <code>else</code> catches everything else:</p>
        <pre><code>const fuel = 12;

if (fuel < 20) {
  console.log("Low fuel");
} else {
  console.log("Ready for launch");
}</code></pre>`,
      exercise: {
        prompt: 'With <code>const fuel = 12;</code>, write an if/else that prints <code>Low fuel</code> when fuel is under 20, and <code>Ready</code> otherwise.',
        starter: 'const fuel = 12;\n\n// Your if/else here\n',
        expectLogs: ['Low fuel'],
        mustContain: ['if', 'else'],
        hints: [
          'if (fuel < 20) { console.log("Low fuel"); } else { console.log("Ready"); }',
        ],
      },
    },
    {
      id: 'loops', title: 'Loops: Doing It 5 Times', mins: 8,
      content: `
        <p>Loops repeat code. The classic <code>for</code> loop has three parts:
        <em>start; keep-going condition; step</em>.</p>
        <pre><code>for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// prints 1, 2, 3, 4, 5 — one per line</code></pre>
        <p>Read it aloud: "start <code>i</code> at 1; keep going while <code>i</code>
        is at most 5; add 1 to <code>i</code> each round."</p>
        <p><code>i++</code> is shorthand for <code>i = i + 1</code>. A
        <code>while</code> loop is the simpler cousin — it repeats while a condition
        holds and you manage the counter yourself.</p>`,
      exercise: {
        prompt: 'Use a <code>for</code> loop to print the numbers 1 through 5, each on its own line.',
        starter: '// Count from 1 to 5\n',
        expectLogs: ['1', '2', '3', '4', '5'],
        mustContain: ['for\\s*\\('],
        named: { 'for\\s*\\(': 'a for loop' },
        mustNotContain: ['console\\.log\\("?1"?\\).*console\\.log\\("?2"?\\)'],
        hints: [
          'for (let i = 1; i <= 5; i++) { console.log(i); }',
        ],
      },
    },
    {
      id: 'functions', title: 'Functions: Reusable Machines', mins: 9,
      content: `
        <p>A function packages code so you can run it again with different inputs.
        Declare it once, call it forever:</p>
        <pre><code>function double(n) {
  return n * 2;
}

console.log(double(21));  // 42
console.log(double(7));   // 14</code></pre>
        <p><code>n</code> is a <em>parameter</em> — a variable that exists only inside
        the function. <code>return</code> sends a value back to whoever called it.
        Without <code>return</code>, a function hands back <code>undefined</code>.</p>
        <p>This is the single most important idea in programming: breaking a big
        problem into small, named, reusable pieces.</p>`,
      exercise: {
        prompt: 'Write a function <code>double(n)</code> that returns <code>n * 2</code>, then print <code>double(21)</code>.',
        starter: '// Define double(), then call it\n',
        expectLogs: ['42'],
        mustContain: ['function|=>', 'return'],
        named: { 'function|=>': 'a function (function keyword or =>)' },
        hints: [
          'function double(n) { return n * 2; }',
          'Then: console.log(double(21));',
        ],
      },
    },
    {
      id: 'arrays', title: 'Arrays: Ordered Lists', mins: 8,
      content: `
        <p>An array holds many values in order, inside square brackets. Positions
        (indexes) start at <strong>0</strong>, not 1:</p>
        <pre><code>const crew = ["Ada", "Grace"];

console.log(crew[0]);    // "Ada" — first item
console.log(crew.length); // 2

crew.push("Linus");      // add to the end
console.log(crew);        // ["Ada","Grace","Linus"]</code></pre>
        <p><code>.length</code> is always one more than the last index — a classic
        source of beginner bugs. Loop over an array with
        <code>for (const c of crew)</code>.</p>`,
      exercise: {
        prompt: 'Start with <code>["Ada", "Grace"]</code>, <code>push</code> <code>"Linus"</code>, then print the array\'s <code>length</code>.',
        starter: 'const crew = ["Ada", "Grace"];\n// push a third member, then log crew.length\n',
        expectLogs: ['3'],
        mustContain: ['push', 'length'],
        hints: [
          'crew.push("Linus"); then console.log(crew.length);',
        ],
      },
    },
    {
      id: 'objects', title: 'Objects: Labeled Data', mins: 8,
      content: `
        <p>Objects group related values under named keys — like a real object having
        properties:</p>
        <pre><code>const ship = {
  name: "Aurora",
  crew: 4,
  docked: false,
};

console.log(ship.name);   // "Aurora"  (dot notation)
console.log(ship["crew"]); // 4        (bracket notation)

ship.crew = 5;             // objects can be updated</code></pre>
        <p>Almost everything in JavaScript is an object or can act like one.
        When data has <em>labels</em>, use an object; when it has an <em>order</em>,
        use an array.</p>`,
      exercise: {
        prompt: 'Create an object <code>ship</code> with a <code>name</code> of <code>"Aurora"</code>, then print <code>ship.name</code>.',
        starter: '// Create a ship object, then log its name\n',
        expectLogs: ['Aurora'],
        mustContain: ['ship\\s*=\\s*\\{', 'ship\\.name|ship\\['],
        named: { 'ship\\s*=\\s*\\{': 'an object literal assigned to ship', 'ship\\.name|ship\\[': 'property access (ship.name or ship["name"])' },
        hints: [
          'const ship = { name: "Aurora", crew: 4 };',
          'console.log(ship.name);',
        ],
      },
    },
    {
      id: 'capstone', title: 'Mini-Mission: Sum the Range', mins: 10,
      content: `
        <p>Time to combine everything: variables, a loop, and running totals. A
        <em>running total</em> is a variable you keep adding to:</p>
        <pre><code>let total = 0;
for (let i = 1; i <= 3; i++) {
  total = total + i;   // or: total += i
}
// total is now 6</code></pre>
        <p>Your mission: sum every number from 1 to 100. Legend says Gauss did this
        in his head as a child — your loop will do it in microseconds.</p>`,
      exercise: {
        prompt: 'Use a loop to add every number from 1 to 100 and print the result: <code>5050</code>.',
        starter: 'let total = 0;\n// Loop 1..100, accumulate, then log the total\n',
        expectLogs: ['5050'],
        mustContain: ['for\\s*\\(|while\\s*\\('],
        named: { 'for\\s*\\(|while\\s*\\(': 'a loop' },
        hints: [
          'for (let i = 1; i <= 100; i++) { total += i; }',
          'Finish with console.log(total);',
        ],
      },
    },
  ],
},

/* ==================== PRO — DEEPER INTO CODE ==================== */
{
  id: 'deeper', tier: 'pro', name: 'Deeper Into Code', icon: '🚀',
  blurb: 'Closures, async, classes, recursion — the concepts that separate scripters from engineers.',
  lessons: [
    {
      id: 'arrows', title: 'Arrow Functions & Callbacks', mins: 8,
      content: `
        <p>Arrow functions are the compact way to write functions:</p>
        <pre><code>const square = n => n * n;   // one-liner: implicit return
const add = (a, b) => {      // braces need explicit return
  return a + b;
};

console.log(square(9));  // 81</code></pre>
        <p>Their real power is as <em>callbacks</em> — functions handed to other
        functions. You'll see this constantly: <code>arr.map(x => x * 2)</code> passes
        a tiny function into <code>map</code>.</p>`,
      exercise: {
        prompt: 'Write an arrow function <code>square</code> and print <code>square(9)</code>.',
        starter: '// const square = ...\n',
        expectLogs: ['81'],
        mustContain: ['=>'],
        named: { '=>': 'an arrow function' },
        hints: ['const square = n => n * n;'],
      },
    },
    {
      id: 'transforms', title: 'map / filter / reduce', mins: 10,
      content: `
        <p>Three array methods do 90% of data work:</p>
        <pre><code>const nums = [1, 2, 3, 4];

nums.map(n => n * 10)       // [10,20,30,40] — transform each
nums.filter(n => n % 2 === 0) // [2,4]        — keep some
nums.reduce((sum, n) => sum + n, 0) // 10     — boil down to one value</code></pre>
        <p>They don't change the original array — they return new ones — and they
        <em>chain</em>: filter, then map, in one expression.</p>`,
      exercise: {
        prompt: 'From <code>[1,2,3,4]</code>, keep the even numbers, multiply each by 10, and print them joined by commas: <code>20,40</code>.',
        starter: 'const nums = [1, 2, 3, 4];\n// chain filter().map() and join(",")\n',
        expectLogs: ['20,40'],
        mustContain: ['filter', 'map'],
        hints: [
          'nums.filter(n => n % 2 === 0).map(n => n * 10)',
          'Add .join(",") at the end to get "20,40".',
        ],
      },
    },
    {
      id: 'destructure', title: 'Destructuring & Spread', mins: 8,
      content: `
        <p>Destructuring unpacks arrays and objects into variables in one step;
        <code>...</code> (spread/rest) gathers or expands the leftovers:</p>
        <pre><code>const [first, ...rest] = [10, 20, 30];
// first = 10, rest = [20, 30]

const { name, crew = 1 } = { name: "Vega" };
// name = "Vega", crew = 1 (default)

const merged = [...[1, 2], ...[3, 4]]; // [1,2,3,4]</code></pre>`,
      exercise: {
        prompt: 'Destructure <code>[10, 20, 30]</code> into <code>first</code> and <code>rest</code>, then print both values so the output is <code>10 2</code> (rest\'s length).',
        starter: 'const nums = [10, 20, 30];\n// destructure, then console.log(first, rest.length)\n',
        expectLogs: ['10 2'],
        mustContain: ['\\.\\.\\.'],
        named: { '\\.\\.\\.': 'the ... rest/spread syntax' },
        hints: [
          'const [first, ...rest] = nums;',
          'console.log(first, rest.length);',
        ],
      },
    },
    {
      id: 'closures', title: 'Closures: Functions with Memory', mins: 11,
      content: `
        <p>A closure is a function that remembers the variables around when it was
        born — even after the outer function has finished:</p>
        <pre><code>function counter() {
  let n = 0;                 // private state
  return () => {
    n = n + 1;               // inner function still sees n
    return n;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2 — n persists between calls</code></pre>
        <p>This is how JavaScript creates private state without classes: the variable
        <code>n</code> is unreachable from outside, yet the returned function keeps
        it alive.</p>`,
      exercise: {
        prompt: 'Build the <code>counter()</code> factory, call the counter twice, then print a third call: output <code>3</code>.',
        starter: 'function counter() {\n  // your code\n}\n\nconst c = counter();\n',
        expectLogs: ['3'],
        mustContain: ['return'],
        hints: [
          'Inside counter(), declare let n = 0, then return an arrow function that increments and returns n.',
          'c(); c(); console.log(c());',
        ],
      },
    },
    {
      id: 'async', title: 'Async: Promises & await', mins: 12,
      content: `
        <p>Some operations take time — network calls, timers, files. A
        <em>promise</em> is a placeholder for a value that arrives later.
        <code>await</code> pauses an <code>async</code> function until the promise
        resolves:</p>
        <pre><code>const wait = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log("loading...");
  await wait(50);            // pause ~50ms, don't freeze the page
  console.log("done");
}

main();</code></pre>
        <p>Key point: <code>await</code> only works inside <code>async</code>
        functions, and it pauses <em>that function</em> — not the whole program.</p>`,
      exercise: {
        prompt: 'Use the <code>wait</code> helper to print <code>cargo delivered</code> after an <code>await</code>.',
        starter: 'const wait = ms => new Promise(r => setTimeout(r, ms));\n\n// write an async main() that awaits wait(50) then logs\n',
        expectLogs: ['cargo delivered'],
        mustContain: ['await|\\.then'],
        named: { 'await|\\.then': 'await (or .then)' },
        hints: [
          'async function main() { await wait(50); console.log("cargo delivered"); }',
          'Don\'t forget to call main(); at the end.',
        ],
      },
    },
    {
      id: 'classes', title: 'Classes: Blueprints for Objects', mins: 10,
      content: `
        <p>A class is a template for making objects with the same shape and
        behavior:</p>
        <pre><code>class Ship {
  constructor(name) {
    this.name = name;      // 'this' = the object being built
  }
  hail() {
    return \`This is \${this.name}\`;
  }
}

const s = new Ship("Nova");
console.log(s.hail()); // "This is Nova"</code></pre>
        <p><code>constructor</code> runs when <code>new</code> creates an instance;
        methods like <code>hail()</code> are shared by every instance.</p>`,
      exercise: {
        prompt: 'Define a <code>Ship</code> class with a constructor storing <code>name</code> and a <code>hail()</code> method, then print <code>new Ship("Nova").hail()</code> → <code>This is Nova</code>.',
        starter: '// class Ship { ... }\n',
        expectLogs: ['This is Nova'],
        mustContain: ['class\\s+Ship', 'constructor|=>'],
        named: { 'class\\s+Ship': 'a Ship class' },
        hints: [
          'constructor(name) { this.name = name; }',
          'hail() { return `This is ${this.name}`; } — or string concat.',
        ],
      },
    },
    {
      id: 'recursion', title: 'Recursion: Functions That Call Themselves', mins: 11,
      content: `
        <p>Recursion solves a problem by solving a smaller version of itself. Every
        recursive function needs a <em>base case</em> (when to stop) and a
        <em>recursive case</em> (the self-call):</p>
        <pre><code>function fact(n) {
  if (n <= 1) return 1;        // base case
  return n * fact(n - 1);      // recursive case
}

console.log(fact(5)); // 120 = 5×4×3×2×1</code></pre>
        <p>Forget the base case and the function calls itself forever — a stack
        overflow, the recursive infinite loop.</p>`,
      exercise: {
        prompt: 'Write recursive <code>fact(n)</code> and print <code>fact(5)</code> → <code>120</code>.',
        starter: 'function fact(n) {\n  // base case + recursive case\n}\n',
        expectLogs: ['120'],
        mustContain: ['function|=>', 'return'],
        hints: [
          'if (n <= 1) return 1;',
          'return n * fact(n - 1);',
        ],
      },
    },
    {
      id: 'errors', title: 'Errors: try / catch / debug', mins: 9,
      content: `
        <p>Code fails. <code>try / catch</code> lets a failure land softly instead of
        crashing everything after it:</p>
        <pre><code>try {
  const data = JSON.parse("not json{");
} catch (e) {
  console.log("caught: " + e.name); // caught: SyntaxError
} finally {
  // runs either way — cleanup lives here
}</code></pre>
        <p>Debugging tip: when output surprises you, log the variable halfway through
        — most bugs are a wrong assumption about what a variable holds.</p>`,
      exercise: {
        prompt: 'Wrap a bad <code>JSON.parse</code> in try/catch and print the caught error name: <code>caught: SyntaxError</code>.',
        starter: '// try { JSON.parse("bad{") } catch ...\n',
        expectLogs: ['caught: SyntaxError'],
        mustContain: ['try', 'catch'],
        hints: [
          'catch (e) { console.log("caught: " + e.name); }',
        ],
      },
    },
  ],
},

/* ==================== ADVANCED — BUILD REAL THINGS ==================== */
{
  id: 'proj-guess', tier: 'advanced', name: 'Project: Guessing Game', icon: '🎯',
  blurb: 'Build the logic of a number-guessing game, milestone by milestone.',
  lessons: [
    {
      id: 'g1', title: 'M1: The Judge', mins: 12,
      content: `
        <p>Every game starts with its rules. Ours needs a <em>judge</em>: given the
        secret number and a guess, it answers <code>"higher"</code>,
        <code>"lower"</code>, or <code>"correct"</code>.</p>
        <p>Small, pure functions like this are the atoms of real projects — easy to
        test, easy to reuse.</p>`,
      exercise: {
        prompt: 'Write <code>judge(secret, guess)</code> returning the right hint, then print <code>judge(42, 50)</code> → <code>lower</code> (the guess must go lower).',
        starter: 'function judge(secret, guess) {\n  // "higher" | "lower" | "correct"\n}\n\nconsole.log(judge(42, 50));\n',
        expectLogs: ['lower'],
        mustContain: ['function|=>', 'if|return.*\\?'],
        hints: [
          'Compare guess to secret first: if (guess === secret) return "correct";',
          'return guess < secret ? "higher" : "lower";',
        ],
      },
    },
    {
      id: 'g2', title: 'M2: Counting Attempts', mins: 12,
      content: `
        <p>A real game tracks state — here, how many guesses the player has burned.
        Loop through a list of guesses and count until the judge says
        <code>"correct"</code>.</p>`,
      exercise: {
        prompt: 'Write <code>playRound(secret, guesses)</code> that counts how many guesses it takes to hit the secret, then print <code>correct in 4 tries</code> for the sample round.',
        starter: 'function playRound(secret, guesses) {\n  // loop, count, stop at "correct"\n}\n\nconsole.log("correct in " + playRound(42, [50, 25, 37, 42]) + " tries");\n',
        expectLogs: ['correct in 4 tries'],
        mustContain: ['for|while'],
        named: { 'for|while': 'a loop' },
        hints: [
          'Reuse judge() from M1 — keep it in your file.',
          'for (let i = 0; i < guesses.length; i++) if (judge(secret, guesses[i]) === "correct") return i + 1;',
        ],
      },
    },
    {
      id: 'g3', title: 'M3: The Full Round', mins: 14,
      content: `
        <p>Final milestone: narrate the round like a game would — print each hint as
        it happens, then the victory line.</p>`,
      exercise: {
        prompt: 'Make <code>playRound</code> print each hint (<code>lower</code>, <code>higher</code>, <code>higher</code>) then finish with <code>You won in 4 tries!</code>.',
        starter: 'function judge(secret, guess) {\n  // from M1\n}\n\nfunction playRound(secret, guesses) {\n  // log each hint, then the win line\n}\n\nplayRound(42, [50, 25, 37, 42]);\n',
        expectLogs: ['lower', 'higher', 'higher', 'You won in 4 tries!'],
        mustContain: ['judge', 'for|while'],
        hints: [
          'Inside the loop: const h = judge(secret, g); if not correct, console.log(h).',
          'After the loop (or when correct): console.log(`You won in ${tries} tries!`);',
        ],
      },
    },
  ],
},
{
  id: 'proj-todo', tier: 'advanced', name: 'Project: To-Do Engine', icon: '✅',
  blurb: 'Model the data behind a to-do app — add, toggle, and query tasks.',
  lessons: [
    {
      id: 't1', title: 'M1: Adding Tasks', mins: 12,
      content: `
        <p>A to-do app is a data model before it's a UI. Each task is an object:
        <code>{ id, text, done }</code>. Adding a task means pushing a new object
        with a fresh id — conventionally one more than the current length.</p>`,
      exercise: {
        prompt: 'Write <code>addTodo(todos, text)</code> that pushes <code>{id, text, done:false}</code> (id = next number) and returns the array. Print the new length after two adds: <code>2</code>.',
        starter: 'const todos = [];\n\nfunction addTodo(todos, text) {\n  // push { id: ?, text, done: false }\n}\n\naddTodo(todos, "Buy milk");\nconsole.log(addTodo(todos, "Code").length);\n',
        expectLogs: ['2'],
        mustContain: ['push', 'done'],
        hints: [
          'todos.push({ id: todos.length + 1, text, done: false }); return todos;',
        ],
      },
    },
    {
      id: 't2', title: 'M2: Toggling Done', mins: 12,
      content: `
        <p>Checking off a task flips its <code>done</code> flag. The trick is finding
        the right task — <code>find()</code> returns the first item matching your
        test, and objects are mutated in place.</p>`,
      exercise: {
        prompt: 'Write <code>toggle(todos, id)</code> that flips <code>done</code> on the matching task, then print <code>todos[0].done</code> → <code>true</code>.',
        starter: 'const todos = [\n  { id: 1, text: "Buy milk", done: false },\n  { id: 2, text: "Code", done: false },\n];\n\nfunction toggle(todos, id) {\n  // find + flip\n}\n\ntoggle(todos, 1);\nconsole.log(todos[0].done);\n',
        expectLogs: ['true'],
        mustContain: ['find|for|while'],
        named: { 'find|for|while': 'a search (find() or a loop)' },
        hints: [
          'const t = todos.find(t => t.id === id);',
          't.done = !t.done;',
        ],
      },
    },
    {
      id: 't3', title: 'M3: The Pending Count', mins: 10,
      content: `
        <p>Every to-do UI shows "3 left". That's a query over the model: count tasks
        where <code>done</code> is false. <code>filter()</code> is made for this.</p>`,
      exercise: {
        prompt: 'Write <code>pendingCount(todos)</code> and print it for the sample list (one of three tasks is done) → <code>2</code>.',
        starter: 'const todos = [\n  { id: 1, text: "Buy milk", done: true },\n  { id: 2, text: "Code", done: false },\n  { id: 3, text: "Sleep", done: false },\n];\n\nfunction pendingCount(todos) {\n  // count the unfinished\n}\n\nconsole.log(pendingCount(todos));\n',
        expectLogs: ['2'],
        mustContain: ['filter|for|while'],
        hints: [
          'return todos.filter(t => !t.done).length;',
        ],
      },
    },
  ],
},
{
  id: 'proj-budget', tier: 'advanced', name: 'Project: Budget Tracker', icon: '📒',
  blurb: 'Turn raw transactions into balances, categories, and a report.',
  lessons: [
    {
      id: 'b1', title: 'M1: Running Balance', mins: 12,
      content: `
        <p>Model money as signed numbers: income positive, spending negative. The
        balance is then just a sum — and <code>reduce()</code> is the right tool.</p>`,
      exercise: {
        prompt: 'Write <code>balance(txns)</code> summing every <code>amt</code> and print it for the sample data → <code>-15</code>.',
        starter: 'const txns = [\n  { desc: "Paycheck", amt: 200 },\n  { desc: "Groceries", amt: -45 },\n  { desc: "Concert", amt: -90 },\n  { desc: "Refund", amt: 20 },\n  { desc: "Rent split", amt: -100 },\n];\n\nfunction balance(txns) {\n  // sum the amts\n}\n\nconsole.log(balance(txns));\n',
        expectLogs: ['-15'],
        mustContain: ['reduce|for'],
        hints: [
          'return txns.reduce((sum, t) => sum + t.amt, 0);',
        ],
      },
    },
    {
      id: 'b2', title: 'M2: Spending by Category', mins: 13,
      content: `
        <p>"Where does the money go?" — grouping is the second classic data move.
        Walk the list, accumulate each category into an object keyed by name.</p>`,
      exercise: {
        prompt: 'Write <code>byCategory(txns)</code> returning an object of category → total spent (positive numbers, expenses only). Print <code>food 45</code>.',
        starter: 'const txns = [\n  { desc: "Groceries", cat: "food", amt: -30 },\n  { desc: "Lunch", cat: "food", amt: -15 },\n  { desc: "Bus pass", cat: "transport", amt: -25 },\n];\n\nfunction byCategory(txns) {\n  // skip income (amt >= 0); accumulate -amt per cat\n}\n\nconst cats = byCategory(txns);\nconsole.log("food " + cats.food);\n',
        expectLogs: ['food 45'],
        mustContain: ['for|reduce'],
        hints: [
          'Inside the loop: if (t.amt < 0) cats[t.cat] = (cats[t.cat] || 0) + (-t.amt);',
        ],
      },
    },
    {
      id: 'b3', title: 'M3: The Report', mins: 14,
      content: `
        <p>Ship it: combine balance and categorization into a printable report —
        income, spending, net. This is the shape of every dashboard ever built:
        <em>query the model, format the output</em>.</p>`,
      exercise: {
        prompt: 'Write <code>report(txns)</code> that prints three lines: <code>Income: 200</code>, <code>Spent: 215</code>, <code>Net: -15</code>.',
        starter: 'const txns = [\n  { desc: "Paycheck", amt: 200 },\n  { desc: "Groceries", amt: -45 },\n  { desc: "Concert", amt: -90 },\n  { desc: "Refund", amt: 20 },\n  { desc: "Rent split", amt: -100 },\n];\n\nfunction report(txns) {\n  // three console.log lines\n}\n\nreport(txns);\n',
        expectLogs: ['Income: 220', 'Spent: 235', 'Net: -15'],
        mustContain: ['for|reduce|filter'],
        hints: [
          'Income = sum of positive amts (Refund counts!): 200 + 20 = 220.',
          'Spent = absolute value of the negative sum: 235. Net = income - spent.',
        ],
      },
    },
  ],
},
{
  id: 'proj-arena', tier: 'advanced', name: 'Project: Arena Battle', icon: '⚔️',
  blurb: 'Simulate a turn-based duel — damage, HP, crits, and a winner.',
  lessons: [
    {
      id: 'a1', title: 'M1: Landing a Hit', mins: 12,
      content: `
        <p>Combat is state mutation: an attacker has <code>dmg</code>, a defender has
        <code>hp</code>, and an attack subtracts one from the other. Objects passed
        to functions are mutated in place — both sides share the same object.</p>`,
      exercise: {
        prompt: 'Write <code>attack(att, def)</code> subtracting <code>att.dmg</code> from <code>def.hp</code>. After one hit, print the goblin\'s hp → <code>12</code>.',
        starter: 'const hero = { name: "Hero", hp: 30, dmg: 8 };\nconst goblin = { name: "Goblin", hp: 20, dmg: 5 };\n\nfunction attack(att, def) {\n  // subtract\n}\n\nattack(hero, goblin);\nconsole.log(goblin.hp);\n',
        expectLogs: ['12'],
        mustContain: ['\\.hp'],
        hints: [
          'def.hp -= att.dmg;',
        ],
      },
    },
    {
      id: 'a2', title: 'M2: Fight to the Finish', mins: 14,
      content: `
        <p>A duel is a loop with a stop condition: keep trading blows while both
        fighters are alive. Write <code>isAlive(u)</code> for clarity — naming the
        question makes the loop read like prose.</p>`,
      exercise: {
        prompt: 'Write <code>duel(a, b)</code> — a attacks first each round — that returns after one fighter drops, and print <code>Hero wins in 3 attacks</code>.',
        starter: 'const hero = { name: "Hero", hp: 30, dmg: 8 };\nconst goblin = { name: "Goblin", hp: 20, dmg: 5 };\n\nfunction isAlive(u) { return u.hp > 0; }\n\nfunction duel(a, b) {\n  // alternate attacks; count a\'s attacks\n}\n\nduel(hero, goblin);\n',
        expectLogs: ['Hero wins in 3 attacks'],
        mustContain: ['while|for'],
        named: { 'while|for': 'a loop' },
        hints: [
          'Goblin: 20hp − 8dmg → dies on the 3rd hit, but gets a counter each round it survives.',
          'while (isAlive(a) && isAlive(b)) { attack(a, b); hits++; if (isAlive(b)) attack(b, a); }',
        ],
      },
    },
    {
      id: 'a3', title: 'M3: Critical Hits', mins: 12,
      content: `
        <p>Final feature: crits. Give <code>attack</code> an optional third
        parameter that doubles the damage — default parameters keep the old
        two-argument calls working. That's backward compatibility in miniature.</p>`,
      exercise: {
        prompt: 'Extend <code>attack(att, def, crit)</code> so a crit deals double damage, and print the damage dealt by a critical hit → <code>16</code>.',
        starter: 'const hero = { name: "Hero", hp: 30, dmg: 8 };\nconst goblin = { name: "Goblin", hp: 20, dmg: 5 };\n\nfunction attack(att, def, crit = false) {\n  // dmg * (crit ? 2 : 1); return the damage dealt\n}\n\nconsole.log(attack(hero, goblin, true));\n',
        expectLogs: ['16'],
        mustContain: ['crit'],
        hints: [
          'const dmg = att.dmg * (crit ? 2 : 1); def.hp -= dmg; return dmg;',
        ],
      },
    },
  ],
},

/* ==================== PREMIUM — MASTERCLASS ==================== */
{
  id: 'master', tier: 'premium', name: 'Masterclass', icon: '👑',
  blurb: 'Deep dives from staff-level engineers: how the best read, design, and ship code.',
  lessons: [
    {
      id: 'read', title: 'Read Code Like a Senior', mins: 15,
      content: `
        <p>Seniors spend more time reading code than writing it. Their trick: they
        don't read top-to-bottom — they hunt for <em>what changes</em> (mutations)
        and <em>what escapes</em> (returns, logs, callbacks).</p>
        <p>Case study — the most famous bug pattern in JavaScript:</p>
        <pre><code>for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
}
// prints 3, 3, 3 — not 0, 1, 2!</code></pre>
        <p>Why? <code>var</code> is function-scoped, so all three callbacks share one
        <code>i</code>. By the time the timers fire, the loop finished and
        <code>i === 3</code>. <code>let</code> is block-scoped — each iteration gets
        its own binding.</p>`,
      mentor: 'When I review code with timers or callbacks inside loops, scoping is the first thing I check. The bug isn\'t in the callback — it\'s in what the callback captured.',
      exercise: {
        prompt: 'Fix the classic bug: print <code>0</code>, <code>1</code>, <code>2</code> from three loop-scheduled timeouts.',
        starter: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i));\n}\n// fix the scoping bug\n',
        expectLogs: ['0', '1', '2'],
        mustContain: ['let\\s+i'],
        named: { 'let\\s+i': 'a let-scoped loop variable' },
        hints: [
          'Change var to let — one word fixes it.',
          'Alternative: capture i per-iteration with an IIFE or a helper function.',
        ],
      },
    },
    {
      id: 'bigo', title: 'Think in Big-O', mins: 16,
      content: `
        <p>Big-O describes how work grows with input size. O(n²) means doubling the
        input quadruples the work — fine at 100 items, fatal at a million.</p>
        <pre><code>// O(n²): compare every pair — 1M items = 10¹² checks
function hasDup(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) return true;
  return false;
}

// O(n): remember what you've seen — one pass
function hasDup(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}</code></pre>
        <p>The pattern to memorize: <em>nested loops over the same data</em> usually
        hides a <code>Set</code> or <code>Map</code> that collapses it to one pass.</p>`,
      mentor: 'I don\'t ask candidates to recite Big-O tables. I ask: "what happens when this gets 1000× bigger?" If the answer is a nested loop, the interview is short.',
      exercise: {
        prompt: 'Rewrite the O(n²) duplicate check as O(n) using a <code>Set</code>. Print <code>true</code> for <code>[1,2,3,4,1]</code>.',
        starter: 'function hasDup(arr) {\n  for (let i = 0; i < arr.length; i++)\n    for (let j = i + 1; j < arr.length; j++)\n      if (arr[i] === arr[j]) return true;\n  return false;\n}\n\nconsole.log(hasDup([1, 2, 3, 4, 1]));\n',
        expectLogs: ['true'],
        mustContain: ['Set'],
        mustNotContain: ['for[\\s\\S]*for'],
        named: { 'for[\\s\\S]*for': '— nested loops (try a single pass with a Set)' },
        hints: [
          'const seen = new Set(); for (const x of arr) { if (seen.has(x)) return true; seen.add(x); }',
        ],
      },
    },
    {
      id: 'patterns', title: 'Patterns That Earn Their Keep', mins: 16,
      content: `
        <p>Design patterns are vocabulary, not laws. The one you'll use weekly is the
        <em>observer</em>: objects subscribe to events and get notified when they
        fire. Node's EventEmitter, DOM events, and every UI framework run on it.</p>
        <pre><code>class Bus {
  constructor() { this.map = {}; }
  on(evt, fn) { (this.map[evt] ??= []).push(fn); }
  emit(evt, data) { (this.map[evt] || []).forEach(f => f(data)); }
}</code></pre>
        <p>Two moves worth stealing: <code>??=</code> creates the listener array only
        if missing, and <code>|| []</code> makes <code>emit</code> safe when nobody
        subscribed. Small guards, zero crashes.</p>`,
      mentor: 'Learn three patterns deeply — observer, factory, and module — and you\'ll recognize 80% of the architecture you\'ll ever meet. The rest are resumes.',
      exercise: {
        prompt: 'Implement the <code>Bus</code> class so <code>on</code>/<code>emit</code> work, then print <code>pong 7</code>.',
        starter: 'class Bus {\n  // your code\n}\n\nconst b = new Bus();\nb.on("ping", d => console.log("pong " + d));\nb.emit("ping", 7);\n',
        expectLogs: ['pong 7'],
        mustContain: ['on\\s*\\(', 'emit\\s*\\('],
        named: { 'on\\s*\\(': 'an on() method', 'emit\\s*\\(': 'an emit() method' },
        hints: [
          'Store listeners in an object of arrays: this.map[evt]',
          'emit loops that array and calls each listener with the data.',
        ],
      },
    },
    {
      id: 'functional', title: 'The Functional Discipline', mins: 14,
      content: `
        <p>Functional style means: data in, data out, nothing mutated. The payoff is
        <em>composition</em> — snapping small functions together like pipes:</p>
        <pre><code>const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const shout = pipe(
  s => s.trim(),
  s => s.toUpperCase(),
  s => s + "!",
);
shout("  hello "); // "HELLO!"</code></pre>
        <p>Read <code>pipe</code> right-to-left: it takes functions, returns a
        function. <code>reduce</code> threads the value through each stage. This is
        the engine inside RxJS, Redux middleware, and Express.</p>`,
      mentor: 'Pure functions are the only code I never worry about. No state, no surprises, trivially testable. Push mutation to the edges of your system.',
      exercise: {
        prompt: 'Implement <code>pipe</code> with <code>reduce</code> so <code>pipe(n => n + 1, n => n * 2)(6)</code> prints <code>14</code>.',
        starter: 'const pipe = (...fns) => {\n  // return a function that threads x through fns\n};\n\nconsole.log(pipe(n => n + 1, n => n * 2)(6));\n',
        expectLogs: ['14'],
        mustContain: ['reduce'],
        hints: [
          'return x => fns.reduce((v, f) => f(v), x);',
        ],
      },
    },
    {
      id: 'testing', title: 'Test Like You Mean It', mins: 15,
      content: `
        <p>Tests are executable specifications: they say what the code <em>must</em>
        do, and they scream when it stops doing it. Before frameworks, understand
        the atom — an assertion:</p>
        <pre><code>function assertEqual(actual, expected) {
  if (actual === expected) console.log("pass");
  else console.log(\`FAIL: got \${actual}, want \${expected}\`);
}</code></pre>
        <p>The discipline: test the <em>behavior</em> (add(2,2) → 4), not the
        implementation. Include the weird cases — zero, negatives, empty inputs —
        because that's where bugs breed.</p>`,
      mentor: 'A test you\'re afraid to delete is a good test. A test that knows how the function works internally is a liability — it breaks every refactor.',
      exercise: {
        prompt: 'Write <code>assertEqual</code> and run three passing checks on <code>add</code>: the output must show <code>pass</code> three times.',
        starter: 'function add(a, b) { return a + b; }\n\nfunction assertEqual(actual, expected) {\n  // log "pass" or a FAIL line\n}\n\n// write three assertions\n',
        expectLogs: ['pass', 'pass', 'pass'],
        mustContain: ['assertEqual'],
        hints: [
          'assertEqual(add(2, 2), 4); assertEqual(add(-1, 1), 0); assertEqual(add(0, 0), 0);',
        ],
      },
    },
    {
      id: 'ship', title: 'Ship It: The Review Checklist', mins: 14,
      content: `
        <p>Before the best engineers merge code, they run a mental checklist: Is it
        <em>readable</em> (names say what things are)? Is it <em>small</em> (each
        function does one thing)? Is it <em>safe</em> (edge cases handled)? Is it
        <em>tested</em>?</p>
        <p>Watch a god-function get refactored — same behavior, three named ideas:</p>
        <pre><code>// before: one blob doing everything
// after: named pieces
const sum  = xs => xs.reduce((a, b) => a + b, 0);
const mean = xs => sum(xs) / xs.length;

function report(xs) {
  console.log("count " + xs.length);
  console.log("sum " + sum(xs));
  console.log("mean " + mean(xs));
}</code></pre>
        <p>Refactoring isn't making code prettier — it's making the next change
        cheaper. Small named pieces can be tested, reused, and deleted.</p>`,
      mentor: 'I approve PRs that make the codebase easier to change tomorrow. Cleverness that saves six lines and costs an hour of reading is a bad trade.',
      exercise: {
        prompt: 'Write <code>sum</code>, <code>mean</code>, and <code>report</code> so <code>report([2,4,6,8])</code> prints the three stats.',
        starter: '// build sum, mean, report — then call report([2,4,6,8])\n',
        expectLogs: ['count 4', 'sum 20', 'mean 5'],
        mustContain: ['sum', 'mean'],
        hints: [
          'const sum = xs => xs.reduce((a,b)=>a+b, 0); const mean = xs => sum(xs)/xs.length;',
        ],
      },
    },
  ],
},
];

const ALL_LESSONS = TRACKS.flatMap(t => t.lessons.map(l => ({ ...l, track: t })));
