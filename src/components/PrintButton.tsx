import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintableComponent from "./PrintableComponent";

function PrintButton() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button
        className="rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-3xl"
        onClick={handlePrint}
      >
        Print CV
      </button>
      <div style={{ display: "none" }}>
        <PrintableComponent ref={componentRef} />
      </div>
    </div>
  );
}

export default PrintButton;
