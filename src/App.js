


import Child from "./components/child";
import Counter from "./components/counter";
import Dropdown from "./components/dropdown";
import Object from "./components/Obj";
import Parent from "./components/parent";
import Products from "./components/products";
import Story from "./components/story";
import StoryProp from "./components/storyProp";
import Tasks from "./components/Todo";
import Uncontrolled from "./components/uncontrolled";


function App() {
  return (
    <div>
    
  <Tasks/>
  <Dropdown/>
  {/* <Products/> */}
  <Parent/>
  <Child/>
  <Uncontrolled/>
  <Story/>
  <StoryProp/>
  <Object/>
  <Counter/>
    </div>
  );
}

export default App;
