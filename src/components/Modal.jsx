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
}) {
   /*
    * Default Values of the Modal (if none defined) :
    * - modalMessage : Displayed message on <Modal/>
    * - modalBackground : Color of the background on <Modal/>
    * - modalFontColor : Color of the message on <Modal/>
    * - modalFontSize : Size of the message on <Modal/>
    */
   const defaultModal = {
      message: modalMessage || "Success !",
      backgroundColor: modalBackground || "lightgreen",
      fontColor: modalFontColor || "black",
      fontSize: modalFontSize || 32,
   };

   return (
      <div
         id="validationModal"
         style={{
            backgroundColor: defaultModal.backgroundColor,
         }}
      >
         <div id="positionModal">
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
