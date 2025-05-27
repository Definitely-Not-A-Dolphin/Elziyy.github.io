Hello dear reader this is Definitely Not A Dolphin, a good friend, and I am here to explain what is going on with all these scare files.

I have a brand new SvelteKit project. Its like Svelte, but cooler. Don't panic, most of these files just do some stuff that is only important for us super nerds, don't worry about them.

Now you may be thinking: where did my files go? Where is style.css? Where is index.html? Don't worry, ill explain where they are and how they work.

`style.css` has been moved to `src/static/style.css` and acts exactly the same.
`index.html` has moved to a happy farm where it lives happily lives with al the other html files. It has been replaced by `+page.svelte`, which is now the home page.

To make new pages, just add a directory / folder in the `src/routes` directory and name it to how you want the new page to be called, for example `src/routes/about-us`.Then make a new `+page.svelte` inside of it. The css will be imported automatically

The site works with TypeScript, but since typescript is a superset of javascript, you will be able to just use javascript instead with no problems.

Live server wont work here, instead type `npm run dev` in the terminal and once it loads type in o and enter.

When working on a new feature, first make a branch to do everything there, once you are done run in the terminal `npm run build` and then push and merge the branch into main / master. When you start development on a new branch make sure everything required is imported by typing `npm install` into the terminal. Also when you do this for the first time ask jsw to "make it ready for publication by doing some config thingeys", he'll know what to do. 

Okay i think thats everything buh bye!