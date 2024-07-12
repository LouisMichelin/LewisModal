[![forthebadge](https://forthebadge.com/images/badges/license-mit.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)

# LewisModal : The modal you've been searching for ages

LewisModal aims at creating a light, swift & customizable modal to complete what you expect out of a modal.

## Table of Contents

1. How to Install
2. Languages required
3. How to use it ?
4. Licensing

## 1 - How to Install

-  Install the module from NPM :

```bash
 npm i lewismodal
```

-  Then import it like this :

```bash
 import LewisModal, { openModal } from "lewismodal";
```

## 2- Languages required

-  React
-  JS
-  CSS

## 3 - How to use it ?

### --- LewisModal is made out of 2 functions

`openModal()` and `<LewisModal />`

### --- These 2 have to be placed inside of your project to make it work

**<LewisModal />** needs to be placed near the beginning of your code.
**openModal()** has to be inside of the toggling part (here, on form submit).

Here's an example :

```javascript
<main>
   <LewisModal />
   <form
      onSubmit={(e) => {
         e.preventDefault(), openModal();
      }}
   >
   {Your code here...}
   </form>
</main>
```

### --- LewisModal can be customized

Here's an example, from top to bottom :

```javascript
<LewisModal
   modalMessage={"Employee Created!"}
   modalBackground={"red"}
   modalFontColor={"white"}
   modalFontSize={32}
/>
```

## Licensing

This project is completely free & open under an MIT License.
