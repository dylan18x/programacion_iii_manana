
/*import ButtonCounter from './components/ButtonCounter';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import HelloWorld from './components/HelloWorld';
import ShowDate from './components/ShowDate';
import SimpleForm from './components/SimpleForm';
import SumarForm from './components/SumarForm';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeUser from './components/WelcomeUser';*/
import Greeting from './props/Greeting';
import ParentAreaTriangulo from './props/ParentAreaTriangulo';
import ParentButtonOne from './props/ParentButtonOne';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentLoginForm from './props/ParentLoginForm';
import ParentUserList from './props/ParentUserList';
import UserCard from './props/UserCard';

    /*<>
      <HelloWorld/>
      <WelcomeUser/>
      <ButtonCounter/>
      <TextInput/>
      <ToggleMessage/>
      <ShowDate/>
      <ColorBox/>
      <ConditionalText/>
      <EmojiList/>
      <SimpleForm/>
      <SumarForm/>
      <PromedioNotas/>
  </>*/
    
function App() {
  const userData = { name: "Dylan", age: 19, last:"Fernández",direction: "La Comuna",phone:"0969081645"};
  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <UserCard user={userData} />
      <ParentButtonOne/>
      <ParentIncrementButton/>
      <ParentInputNotifier/>
      <ParentUserList/>
      <ParentLoginForm/>
      <ParentAreaTriangulo/>
    </>
  );
}


export default App;
