# Getting Started with ESLint
You can install ESLint using npm or yarn:

npm install eslint --save-dev
# or
yarn add eslint --dev

You should then set up a configuration file, 
and the easiest way to do that is to use the --init flag:

$ npx eslint --init
# or
$ yarn run eslint --init

# Configuration
Note: If you are coming from a version before 1.0.0 please see the migration guide.

After running eslint --init, you'll have a .eslintrc.{js,yml,json} 
file in your directory. In it, you'll see some rules configured like this:

{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
Your .eslintrc.{js,yml,json} configuration file will also include the line:

{
    "extends": "eslint:recommended"
}


# How to use prettier to customize your code formatting

1. Install prettier in your project
npm:npm install --save-dev --save-exact prettier
yarn:yarn add --dev --exact prettier

After installing, create a json file to store your custom configurations:
 type echo {}> .prettierrc.json in your terminal

You should also create a .prettierignore file for everything that you 
don’t want to format. You can use your .gitignorefile as a reference for this step.

 Install the prettier extension in your editor
Search and install this extension on vscode:

You can configure it to format on save, which is really useful. For this, open the palette 
with ctrl shift P and go to user settings. Go to formatting and select option format on save.

Set up your format options
Now let’s come back to our prettierrc.json file and add our new configs. 
For this example, set up tabs instead of spaces, single quotes, trailing comma and bracket spacing:

{ "useTabs": true,
    "tabSize": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "parser":"typescript"
}

Use tabSize to define how many spaces should occupy a tab, and if you want,
 you can use the option “parser” — but prettier automatically infers it from 
 the input file path, so this isn’t really important.

Format your files
Now we’re ready to start formatting our code with prettier.