// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A place to learn TypeScript in a place where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript
interface Foo {
  name: string;
}

function go() {
  let instance: Foo | null = null;


  let mutator = () => {
   instance = {
     name: 'string'
   };  
  };

  mutator();


  if (instance == null) {
   console.log('Instance is null or undefined');
  } else {
   console.log(instance.name); //cause
  }
}



// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  