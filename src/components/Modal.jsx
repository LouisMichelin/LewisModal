import "./Modal.scss";

// Function to Toggle the Modal
export function openModal() {
   document.getElementById("validationModal").style.display = "block";
}

// Function to Close the Modal
export function closeModal() {
   document.getElementById("validationModal").style.display = "none";
}

// Modal
export default function Modal({
   modalMessage,
   modalBackground,
   modalFontColor,
   modalFontSize,
   modalWidth,
   modalHeight,
   mRed,
   mGreen,
   mBlue,
   mOpacity,
}) {
   /*
    * Here are the Default Values of the Modal (if none defined) :
    * - modalMessage : Displayed message on <Modal/>
    * - modalBackground : Color of the background on <Modal/>
    * - modalFontColor : Color of the message on <Modal/>
    * - modalFontSize : Size of the message on <Modal/>
    * - modalWidth : Width of the <Modal/>
    * - modalHeight : Height of the <Modal/>
    * - mRed : Quantity of Red for Main Background's RGBa()
    * - mGreen : Quantity of Green for Main Background's RGBa()
    * - mBlue : Quantity of Blue for Main Background's RGBa()
    * - mOpacity : Opacity for Main Background's RGBa()
    */
   const defaultModal = {
      message: modalMessage || "Success !", // String message between ""
      backgroundColor: modalBackground || "lightgreen", // Colors (any sort)
      fontColor: modalFontColor || "black", // Colors (any sort)
      fontSize: modalFontSize || 32, // Size in pixels (px)
      widthOfModal: modalWidth || 66, // Values between [0-100] (%age)
      heightOfModal: modalHeight || 66, // Values between [0-100] (%age)
      amountOfRed: mRed || 50, // Values between [0-255] (RGB values)
      amountOfGreen: mGreen || 200, // Values between [0-255] (RGB values)
      amountOfBlue: mBlue || 50, // Values between [0-255] (RGB values)
      mainBackgroundOpacity: mOpacity || 25, // Values between [0-100] (%age)
   };

   // Close Modal when clicking anywhere else
   function otherCloseModal(event) {
      let validation = document.getElementById("validationModal");
      if (validation === event.target) {
         return (validation.style.display = "none");
      }
   }

   return (
      <div
         id="validationModal"
         onClick={(e) => otherCloseModal(e)}
         style={{
            backgroundColor: `rgba(${defaultModal.amountOfRed}, ${defaultModal.amountOfGreen}, ${defaultModal.amountOfBlue}, ${defaultModal.mainBackgroundOpacity}%)`,
         }}
      >
         <div
            id="contentModal"
            style={{
               width: `${defaultModal.widthOfModal}%`,
               height: `${defaultModal.heightOfModal}%`,
            }}
         >
            <button id="closeValidationModal" onClick={closeModal}></button>
            <div
               id="confirmationModal"
               style={{
                  color: defaultModal.fontColor,
                  fontSize: defaultModal.fontSize,
               }}
            >
               {defaultModal.message}
            </div>
         </div>
      </div>
   );
}
