import jsPDF from "jspdf";

 const SavePDF = () => {
  const handleSavePDF = () => {
    const doc = new jsPDF();
    doc.text("Resume", 10, 10);
    // Add user info and other content here
    doc.save("resume.pdf");
  };

  return <button onClick={handleSavePDF}>Save as PDF</button>;
};

export default SavePDF
