import { Props } from "./Props";
import { ConditionalRender } from "./ConditionalRender";
import { RenderList } from "./RenderList";
import { ClickEvents } from "./ClickEvents";
import { UseState } from "./UseState";
import { OnChange } from "./OnChange";
import { ColorPicker } from "./ColorPicker";

function App() {
  return (
    <>
      <hr />
      <Props name="Jeremy" age={24} isStudent={true} />
      <hr />
      <ConditionalRender isLoggedIn={true} userName="Jeremy" />
      <hr />
      <RenderList />
      <hr />
      <ClickEvents />
      <hr />
      <UseState />
      <hr />
      <OnChange />
      <hr />
      <ColorPicker />
      <hr />
    </>
  );
}

export default App;
