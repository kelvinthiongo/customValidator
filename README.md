# Custom Jquery Validator

## This enable you to validate fields that are required.

As the name suggests, you must have jquery.

## Installing Custom Jquery Validator

Download these files and add the js script tag below just above the </body> tag.

```html
<script src="/employer/js/customValidator.js"></script>
```

add the link tag below in the <head>.

```html
<link rel="stylesheet" href="/path-to-css/customValidator.css" />
```

## How it works

Upon form submission event, the function checks for required fields, if any, they are highlighted with an arror appended and page scrolled to focus those fields.

## Usage

Add class "required" to all fields that are required.

Add the validateForm(selector) function below inside the submiting function. The selector is that of the container in which fields are contained. It can be seleced via id or class.

```js
validateForm(selector);
```

e.g.

```js
var response = validateForm(".form-container");
```

The function returns false if empty 'required fields are detected, otherwise, it returns true.

You should return null if response is false
eg.

```js
$("#submit-btn").click(function () {
  // Validate form
  if (validateForm(".form-body") == false) {
    return null;
  }

  //Continue with the rest of the logic

});
```
