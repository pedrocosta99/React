import "../Components/Style/Color.css"

const DescriptionWithLink = (props) => {
  return <div onClick={() => props.clickOnPlanet(props.name)}>
    <p>{props.description}</p>
    Link: <a href={props.url}>
      {props.name}
    </a>
    <div className='red-font'>Color test</div>
  </div>
}

export default DescriptionWithLink;
