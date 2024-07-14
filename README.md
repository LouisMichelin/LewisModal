[![forthebadge](https://forthebadge.com/images/badges/license-mit.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)

# LewisModal : The modal you've been searching for ages

LewisModal aims at creating a light, swift & customizable modal to complete what you expect out of a modal.

## Table of Contents

1. How to Install
2. Languages required
3. How to make it work ?
4. Licensing

## 1 - How to Install

First, install the module from NPM :

```bash
 npm i lewismodal
```

and then import it inside your project :

```bash
 import LewisModal, { openModal } from "lewismodal";
```

## 2- Languages required

-  React
-  JS
-  CSS

## 3 - How to make it work ?

### --- Requirements :

You need both **`<LewisModal />`** and **`openModal()`** inside of your code.

### --- Placement :

-  **`<LewisModal />`** has to be somewhere inside of your code (on top of it at best).
-  **`openModal()`** has to be placed inside of the triggering part.

### --- Example :

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

> **LewisModal** is placed right after **<main>**, and **openModal()** is inside of "onSubmit".
> Therefore, the modal will be triggered whenever a **<form>** is sent.

### --- Customization

-  **`modalMessage` = { string }** --- text displayed
-  **`modalFontColor` = { any }** --- text color **( string, rgb() ...)**
-  **`modalFontSize` = { number }** --- size of text **( px )**
-  **`modalWidth` = { number }** --- width of modal **( % , [0-100] )**
-  **`modalHeight` = { number }** --- height of modal **( % , [0-100] )**
-  **`mRed` = { number }** --- background color with the **RED** of RGB: **( [0-255] )**
-  **`mGreen` = { number }** --- background color with the **GREEN** of RGB: **( [0-255] )**
-  **`mBlue` = { number }** --- background color with the **BLUE** of RGB: **( [0-255] )**
-  **`mOpacity` = { number }** --- opacity of background **( % , [0-100] )**

**Here's an example :**

```html
<LewisModal modalMessage={"Document Created!"} modalFontColor={"white"}
modalFontSize={32} modalWidth={75} modalHeight={75} mRed={150} mGreen={150}
mBlue={150} mOpacity={50} />
```

## Licensing

This project is completely free & open under an MIT License.
