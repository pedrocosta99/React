import DescriptionWithLink from "./DescriptionLink"

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta ${name}`)
}

function Planetas() {
  const numbers = [1,2,3,4,5]
  const satellites = numbers.map((n) => 
    <li>Satélite {n}</li>
  )

  return <div>
    <ul>
      {satellites}
    </ul>
    <DescriptionWithLink
        name="Mercury"
        description="The smallest planet in the Solar System (0.055 MEarth), Mercury has no natural satellites."
        url="https://en.wikipedia.org/wiki/Mercury_(planet)"
        clickOnPlanet={clickOnPlanet}
      />
      <DescriptionWithLink
        name="Venus"
        description="Venus, ike Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity."
        url="https://en.wikipedia.org/wiki/Venus"
        clickOnPlanet={clickOnPlanet}
      />
      <DescriptionWithLink
        name="Mars"
        description="Mars has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars "
        url="https://en.wikipedia.org/wiki/Mars"
        clickOnPlanet={clickOnPlanet}
      />
  </div>
}


export default Planetas
