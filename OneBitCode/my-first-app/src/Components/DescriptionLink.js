const DescriptionWithLink = (props) => {
  return <div>
    <p>{props.description}</p>
    Link: <a href={props.url}>
      {props.name}
    </a>
  </div>
}

export default DescriptionWithLink;
