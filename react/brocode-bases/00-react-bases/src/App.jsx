import { Props } from "./Props";
import { ConditionalRender } from "./ConditionalRender";
import { RenderList } from "./RenderList";
import { ClickEvents } from "./ClickEvents";

function App() {
  return (
    <>
      <Props name="Jeremy" age={24} isStudent={true} />
      <hr />
      <ConditionalRender isLoggedIn={true} userName="Jeremy" />
      <hr />
      <RenderList />
      <hr />
      <ClickEvents />
      <hr />
    </>
  );
}

export default App;
