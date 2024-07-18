[![forthebadge](https://forthebadge.com/images/badges/license-mit.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)

# LewisModal : The modal you've been searching for ages

LewisModal aims at creating a light, swift & customizable modal to complete what you expect out of a modal.

---

## Table of Contents

1. How to Install
2. Languages required
3. How to make it work ?
4. Licensing

---

## 1 - How to Install

First, install the module from NPM :

```bash
 npm i lewismodal
```

and then import it inside your project :

```bash
 import LewisModal, { openModal } from "lewismodal"
```

---

## 2- Languages required

-  React
-  JS
-  CSS

---

## 3 - How to make it work ?

### Requirements :

You need both `<LewisModal />` and `openModal()` inside of your code.

### Placement :

`<LewisModal />` has to be somewhere inside of your code (on top of it at best) and `openModal()` has to be placed inside of the triggering part.

### Example :

```html
<main>
    // LewisModal here :
   <LewisModal />
   // Function inside of "onSubmit" :
   <form
        onSubmit={(e) => {
         e.preventDefault(),
         openModal();
        }}
   >
        {Your code here...}
   </form>
</main>
```

> **LewisModal** is placed right after **main**.
> **openModal()** is inside **onSubmit()**. Therefore, the modal will be triggered whenever a **form** is sent.

### Customization

-  **`modalMessage` = { string }** : _text displayed_
-  **`modalFontColor` = { any }** : _text color_ **( string, rgb() ...)**
-  **`modalFontSize` = { number }** : _size of text_ **( px )**
-  **`modalWidth` = { number }** : _width of modal_ **( % , [0-100] )**
-  **`modalHeight` = { number }** : _height of modal_ **( % , [0-100] )**
-  **`modalTextAreaBgColor` = { any }** : _background color of text area's div_ **( string, rgb() ...)**
-  **`mRed` = { number }** : _background color with the_ **RED** _of RGB_ **( [0-255] )**
-  **`mGreen` = { number }** : _background color with the_ **GREEN** _of RGB_ **( [0-255] )**
-  **`mBlue` = { number }** : _background color with the_ **BLUE** _of RGB_ **( [0-255] )**
-  **`mOpacity` = { number }** : _opacity of background_ **( % , [0-100] )**

**Here's an example :**

```javascript
<LewisModal
   modalMessage={"Document Created!"}
   modalFontColor={"white"}
   modalFontSize={32}
   modalWidth={75}
   modalHeight={75}
   modalTextAreaBgColor={"darkgreen"}
   mRed={150}
   mGreen={150}
   mBlue={150}
   mOpacity={50}
/>
```

## Licensing

This project is completely free & open under an MIT License.
