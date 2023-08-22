import './Btn.css';

const Btn = (props) => {
    return(
        <button className='btn-cta'>{props.title}</button>
    )
}

export default Btn;