import "./Modal.scss";

export function openModal() {
   document.getElementById("validationModal").style.display = "block";
}
export function closeModal() {
   document.getElementById("validationModal").style.display = "none";
}

export default function Modal({
   modalMessage,
   modalBackground,
   modalFontColor,
   modalFontSize,
}) {
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
