 
const Pagination = ({increament,decreament,pageNo,moveForward,moveBackward}) => {
    
  return <div className='Pagination'>
      <div onClick={moveBackward}>
         <i className="fa fa-backward" ></i>
      </div>
      <div  onClick={decreament}>
         <i className="fa fa-angle-left"></i>
      </div>
      <div><span><strong>{pageNo}</strong></span></div>
       <div onClick={increament}>
         <i className="fa fa-angle-right"></i>
      </div>
      <div onClick={moveForward}>
         <i className="fa fa-forward" ></i>
      </div>

  </div>;
};

export default Pagination;
