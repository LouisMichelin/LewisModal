[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/license-mit.svg)](https://forthebadge.com)

# LewisModal : the modal you've been searching for ages

LewisModal aims at creating a light, swift & customizable modal to complete what you expect out of a modal.

## Table of Contents

-  [Install](#installation)
-  [Languages used](#languages)
-  [How to use it ?](#how-does-it-work-?)
-  [Licensing](#lincensing)

## Installation

1. Install the module from NPM:

```bash
 npm i lewismodal
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
<Modal />
```

### These 2 have to be placed inside of your project to make it work.

Here's an example :

```javascript
<main>
   <Modal />
</main>
```

## TEST

```javascript
<Modal
   modalMessage={"Employee Created!"}
   modalBackground={"red"}
   modalFontColor={"white"}
   modalFontSize={32}
/>
```

## Licensing

This project is completely free & open under an MIT License.
