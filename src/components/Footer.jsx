function Footer(props) {

    return (
        <>
            <p style={{ 
                color: props.color, 
                textDecoration: 'underline', 
                fontSize: '60px',
                fontWeight: 'bold'
                }}>{props.end}</p>
        </>
    );
    
  }

  export default Footer