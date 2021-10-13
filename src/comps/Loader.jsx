import '../styles/Loader.scss';
const Loader = ({text}) => {
  return(
    <div className="Loader">
      <div className="bar">
            <div className="moving-bar">
            </div>
      </div>
      <p>{text} </p>
    </div>
    )
}

export default Loader