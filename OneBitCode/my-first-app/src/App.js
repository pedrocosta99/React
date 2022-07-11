import DescriptionWithLink from "./Components/DescriptionLink";

function App() {
  return (
    <div>
      <DescriptionWithLink
        name="Mercury"
        description="The smallest planet in the Solar System (0.055 MEarth), Mercury has no natural satellites."
        url="https://en.wikipedia.org/wiki/Mercury_(planet)"
      />
      <DescriptionWithLink
        name="Venus"
        description="Venus, ike Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity."
        url="https://en.wikipedia.org/wiki/Venus"
      />
      <DescriptionWithLink
      name="Mars"
        description="Mars has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars "
        url="https://en.wikipedia.org/wiki/Mars"
      />
    </div>
  );
}

export default App;
