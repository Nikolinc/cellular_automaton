import Colors from "./component/Colors";
import Grid from "./component/Grid";

function App() {
  return (
    <div className="unselectable">
      <div className="text-center  text-emerald-500 text-[52px] font-bold">
        Cellular automaton
        <div className="mt-12 flex justify-center gap-5">
          <Grid />
          <Colors />
        </div>
      </div>
    </div>
  );
}

export default App;
