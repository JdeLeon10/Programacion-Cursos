import { Contact } from "./Components/Contact";
import { Entry } from "./Components/Entry";
import { Header } from "./Components/Header";

function App() {
  // Rendering arrays
  const ninjaTurtles = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];

  return (
    <>
      <Header />
      <Entry
        imgSrc="https://scrimba.com/links/travel-journal-japan-image-url"
        imgAlt="Mount Fuji"
        country="Japan"
        title="Mount Fuji"
        time="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Entry
        imgSrc="https://scrimba.com/links/travel-journal-australia-image-url"
        imgAlt="Sydney Opera House"
        country="Australia"
        title="Sydney Opera House"
        time="27 May, 2021 - 8 Jun, 2021"
        description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
      <Entry
        imgSrc="https://scrimba.com/links/travel-journal-norway-image-url"
        imgAlt="Geirangerfjord"
        country="Norway"
        title="Geirangerfjord"
        time="01 Oct, 2021 - 18 Nov, 2021"
        description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />

      <hr />

      <Contact
        name="Mr. Whiskerson"
        phoneNumber="(212) 555-1234"
        email="mr.whiskerson@gmail.com"
      />
      <Contact
        name="Mrs. Jeremy"
        phoneNumber="(333) 555-3333"
        email="mrs.jeremy@gmail.com"
      />
      <Contact
        name="Miss Andrea"
        phoneNumber="(444) 555-4444"
        email="miss.andrea@gmail.com"
      />
      <Contact
        name="Master Jonathan"
        phoneNumber="(555) 555-5555"
        email="master.jonathan@gmail.com"
      />

      <hr />

      <h1>Las Tortugas Ninja</h1>
      <ul>
        {ninjaTurtles.map((turtle) => (
          <li key={turtle}>{turtle}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
