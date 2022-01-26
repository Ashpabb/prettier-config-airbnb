# prettier-config-airbnb

A [Prettier](https://prettier.io/) configuration based off the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)

## Installation

```sh
npm install prettier prettier-config-airbnb --save-dev
```

## Basic Usage

In your `package.json`, the `prettier` property will be added and defined like this:

```jsonc
{
  "prettier": "prettier-config-airbnb"
}
```

[Read official config docs here](https://prettier.io/docs/en/configuration.html#sharing-configurations) for other configuration schemes

## Rules

```jsonc
{
  "$schema": "http://json.schemastore.org/prettierrc",
  
  /**
   * Base Config from: https://github.com/airbnb/javascript/blob/master/README.md
   */

  // 3.6 Quote Props
  // Only quote properties that are invalid identifiers.
  "quoteProps": "as-needed",
  
  // 6.1 Quotes
  // Use single quotes instead of double quotes.
  "singleQuote": true,
  
  // 8.2 - Arrow Function Parentheses
  // Always include parentheses around a sole arrow function parameter.
  "arrowParens": "always",
  
  // 19.1 Tabs and Tab Width
  // Use soft tabs (space character) set to 2 spaces.
  "tabWidth": 2,
  "useTabs": false,
  
  // 19.3 Print Width and Wrapping
  // Specify the line length that the printer will wrap on. Wrap prose if it exceeds the print width.
  "printWidth": 100,
  "proseWrap": "always",
  
  // 19.11 Bracket Spacing
  // Do not print spaces between brackets in object literals.
  "bracketSpacing": false,
  
  // 20.2 Trailing Commas
  // Print trailing commas wherever possible when multi-line.
  // e.g. A single-line array never gets trailing commas.
  "trailingComma": "es5",
  
  // 21.1 Semicolons
  // Print semicolons at the ends of statements.
  "semi": true,
  
  /**
   * React Config (from: https://github.com/airbnb/javascript/tree/master/react)
   */

  // Tags
  // If your component has multiline properties, close its tag on a new line.
  "bracketSameLine": false,
  
  // Quotes
  // Use double quotes in JSX.
  "jsxSingleQuote": false
}
```
