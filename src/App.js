import './App.css';
import {Header} from "./Header";
import {ItemCard} from "./itemCard";
import {Grid} from "@material-ui/core";
function App() {
  
  return (
    <div className="App">
      <Grid container direction="column">
        <Header title="Omkar Virkar"></Header>
      </Grid>
      <br/>
      <Grid item container>
          <Grid item xs={0} sm={2}>

          </Grid>
          <Grid item xs={12} sm={8}>
              <ItemCard />
          </Grid>
          <Grid item xs={0} sm={2}>

          </Grid>
      </Grid>
    </div>
  );
}

export default App;
