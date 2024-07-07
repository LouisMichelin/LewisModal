[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/license-mit.svg)](https://forthebadge.com)

# LewisModal : The modal you've been searching for ages

LewisModal aims at creating a light, swift & customizable modal to complete what you expect out of a modal.

## Table of Contents

-  [Install](#installation)
-  [Languages used](#languages)
-  [How to use it ?](#how-does-it-work-)
-  [Licensing](#licensing)

## Installation

1. Install the module from NPM :

```bash
 npm i lewismodal
```

2. Then import it like this :

```bash
 import LewisModal, { openModal } from "lewismodal";
```

## Languages

-  React
-  JS
-  CSS

## How does it work ?

### LewisModal is made out of 2 functions :

```javascript
openModal();
```

and

```javascript
<LewisModal />
```

### These 2 have to be placed inside of your project to make it work :

LewisModal needs to be placed near the beginning of your code, while openModal has to be inside of the toggling part (here, on form submit).
Here's an example :

```javascript
<main>
   <LewisModal />
   <form
      onSubmit={(e) => {
         e.preventDefault(), openModal();
      }}
   ></form>
</main>
```

### LewisModal can be edited :

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
