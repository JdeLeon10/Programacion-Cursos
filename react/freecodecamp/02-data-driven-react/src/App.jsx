import { Contact } from "./Components/Contact";
import { Entry } from "./Components/Entry";
import { Header } from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Entry
        title="Old Faithful Geyser"
        time="2:30pm"
        description="Random description 1"
      />
      <Entry
        title="New Zeeland"
        time="8:30pm"
        description="Random description 2"
      />
      <Entry title="Madrid" time="6:30pm" description="Random description 3" />

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
    </>
  );
}

export default App;
