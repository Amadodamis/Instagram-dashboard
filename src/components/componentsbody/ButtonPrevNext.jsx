import '../../css/App.css';
import '../../css/body.css';

function ButtonPrevNext(props) {
  const {prevHandler,nextHandler,leng} = props
  let ant = "<< Anterior"
  let sig = " Siguiente >>"

  if(leng==="ENG"){
      ant = "<< Previous"
      sig = " Next >>"
  } 

  return (
    <div className='container-ant-sig'>
      <button className='button-prev-next' onClick={prevHandler}>{ant}</button>
      {/* {currentPage} */}
      <button className='button-prev-next' onClick={nextHandler}>{sig}</button>
    </div>
  );
}

export default ButtonPrevNext;