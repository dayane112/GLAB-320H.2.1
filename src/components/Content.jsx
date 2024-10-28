function Content(props) {
    return (
    <>
        <p style={{color: props.color, textDecoration: 'underline'}}>{props.text}</p>
        <p style={{
            color: props.color, 
            fontWeight: 'bold', 
            fontStyle: 'italic'
            }}>{props.practice}</p>
       
    </>
    );
  }

  export default Content