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
   return (
      <div
         id="validationModal"
         style={{
            backgroundColor: modalBackground,
         }}
      >
         <div id="positionModal">
            <button id="closeValidationModal" onClick={closeModal}></button>
            <div
               id="confirmationModal"
               style={{
                  color: modalFontColor,
                  fontSize: modalFontSize,
               }}
            >
               {modalMessage}
            </div>
         </div>
      </div>
   );
}
