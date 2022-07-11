
const soma = (a,b) => {
  return a+b
}

function Coelhinho(props) {
  return <p>
    Meu nome é {props.name}, minha soma é {soma(props.num1, props.num2)}
  </p>
}


export default Coelhinho
