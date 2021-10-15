# JS Activity: Text area character counter
In this activity you will add a dynamic counter that displays the number of characters entered into a `<textarea>` element.

## Instructions
1. In `character-counter.js`, create a `textarea` variable using `document.querySelector()`.
2. Create a `counter` variable for the paragraph that will hold the current character count of `textarea`.
3. Using `Element.getAttribute()` create a `limit` variable that holds the max character limit defined by the `maxlength` attribute of the `textarea` element.
4. Using `Element.addEventListener()` and the `input` event, add an event handler to `textarea` that updates `counter` every time the user types a character.
    - Hint: `textarea.value` has all the same methods as any other string.
