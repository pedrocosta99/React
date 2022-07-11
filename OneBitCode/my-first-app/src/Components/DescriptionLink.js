const DescriptionWithLink = (props) => {
  return <div onClick={() => props.clickOnPlanet(props.name)}>
    <p>{props.description}</p>
    Link: <a href={props.url}>
      {props.name}
    </a>
  </div>
}

export default DescriptionWithLink;
