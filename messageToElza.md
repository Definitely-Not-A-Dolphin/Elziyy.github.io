# Important file

## What are all these scary files doing here
I have made a brand new SvelteKit project. Its like Svelte, but cooler. Don't panic, most of these files just do some stuff that is only important for us super nerds, don't worry about them.

## Where are my old files?
`style.css` has been moved to `src/static/style.css` and acts exactly the same.
`index.html` has moved to a happy farm where it lives happily lives with al the other html files. It has been replaced by `+page.svelte`, which is now the home page.
`CNAME` is still where it used to be, but that doesn't really matter, you can ignore CNAME for now.

## How can I make a new page on my website?
To make new pages, just add a directory / folder in the `src/routes` directory and name it to how you want the new page to be called, for example `src/routes/about-us`.Then make a new `+page.svelte` inside of it. The css will be imported automatically

## What things do I need to learn or know to maintain this site?
The site works with TypeScript, but since TypeScript is a superset of JavaScript, you will be able to just use JavaScript instead with no problems.

Here are some sources:
### JavaScript
- https://www.w3schools.com/js/DEFAULT.asp
- https://learnxinyminutes.com/javascript/

### TypeScript
- https://www.w3schools.com/typescript/index.php
- https://learnxinyminutes.com/typescript/

### Svelte
- https://svelte.dev/tutorial/svelte/welcome-to-svelte

### SvelteKit (do the Svelte tutorial first)
- https://svelte.dev/tutorial/kit/introducing-sveltekit

### JavaScript Object Notation (JSON)
- https://www.w3schools.com/js/js_json_intro.asp
- https://learnxinyminutes.com/json/

## Other important stuff
When working on a new feature, first make a branch to do everything there, once you are done run in the terminal `npm run build` and then push and merge the branch into main / master. When you start development on a new branch make sure everything required is imported by typing `npm install` into the terminal. Also when you do this for the first time ask jsw to "make it ready for publication by doing some config thingeys", he'll know what to do.

If you want to see how your site looks and functions while developing; live server wont work here, instead type `npm run dev` in the terminal and once it loads type in `o`+`enter`.

Okay I think thats everything buh bye!
