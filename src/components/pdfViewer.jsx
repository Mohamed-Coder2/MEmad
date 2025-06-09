const PDFButton = ({text}) => {
  return (
    <button 
      onClick={() => window.open('/MEmad/CV.pdf', '_blank')}
      className="pdf-button"
    >
      {text ? text : 'Resume'} <span><i className="fa-solid fa-up-right-from-square"></i></span>
    </button>
  );
};

export default PDFButton;