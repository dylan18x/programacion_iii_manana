
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
import WelcomeUser from './components/WelcomeUser';
import Greeting from './props/Greeting';
import ParentAreaTriangulo from './props/ParentAreaTriangulo';
import ParentButtonOne from './props/ParentButtonOne';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentLoginForm from './props/ParentLoginForm';
import ParentUserList from './props/ParentUserList';
import AccessWithLimit from './useState/AccessWithLimit';
import CheckboxSummary from './useState/CheckboxSummary';
import DocumentTitleChanger from './useState/DocumentTitleChanger';
import HoverFont from './useState/HoverFont';
import LanguageSwitcher from './useState/LanguageSwitcher';
import LoginAccessWithLimit from './useState/LoginAccessWithLimit';
import MultiSwitch from './useState/MultiSwitch';
import PostLikes from './useState/PostLikes';
import ClickHistory from "./useState/ClickHistory";
import DynamicColor from "./useState/DynamicColor";
import Clock from "./useEffect/Clock";
import FetchUser from "./useEffect/FetchUser";
import FetchUsers from "./useEffect/FetchUsers";
import LogEffect from "./useEffect/LogEffect";
import PersistCounter from "./useEffect/PersistCounter";
import ScrollLogger from "./useEffect/ScrollLoger";
import { useState } from "react";
import { LanguageContext } from "./useContext/LanguageContext";
import LanguageToggle from "./useContext/LanguageToggle";
import LoginStatus from "./useContext/LoginStatus";
import { LoginContext } from "./useContext/LoginContext";
import CirculoColorido from "./useRef/CircuitoColorido";
import FocoAutomatico from "./useRef/FocoAutomatico";
import MoverCaja from "./useRef/MoverCaja";
import ReproductorSonido from "./useRef/ReproductorSonido";
import ScrollDemo from "./useRef/ScrollDemo";
import ContadorLetras from "./useMemo/ContadorLetras";
import ExpensiveCalc from "./useMemo/ExpensiveCalc";
import FiltroLista from "./useMemo/FiltroLIsta";
import PrimosMemo from "./useMemo/PrimosMemo";
import TablaOrdenada from "./useMemo/TablaOrdenada";
import Contador from "./useCallback/contador";
import Lista from "./useCallback/LIsta";
import UserCard from './props/UserCard';*/

import AreaCirculo from "./useReducer/AreaCirculo";
import ContadorReducer from "./useReducer/ContadorReducer";
import FormularioReducer from "./useReducer/FormularioReducer";



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
      /*const userData = { name: "Dylan", age: 19, last:"Fernández",direction: "La Comuna",phone:"0969081645"};
      const [lang, setLang] = useState('es');
      const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const toggleLogin = () => setIsLoggedIn(prev => !prev);
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
      <HoverFont/>
      <AccessWithLimit/>
      <LoginAccessWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LanguageSwitcher/>
      <MultiSwitch/>
      <DynamicColor/>
      <ClickHistory/>
      <LogEffect/>
      <FetchUser/>
      <FetchUsers/>
      <Clock/>
      <ScrollLogger/>
      <PersistCounter/>
      <LanguageContext.Provider value={{ lang, toggleLanguage }}>
        <LanguageToggle />
      </LanguageContext.Provider>
      
      <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <LoginStatus />
      </LoginContext.Provider>
      <FocoAutomatico/>
      <CirculoColorido/>
      <ScrollDemo/>
      <ReproductorSonido/>
      <MoverCaja/>
      <ExpensiveCalc/>
      <FiltroLista/>
      <TablaOrdenada/>
      <PrimosMemo/>
      <ContadorLetras/>
      const elementos = [1,2,3,4,5,6,7,8,9,10];
    
      return (
        <>
          <h2>Tabla de Multiplicar</h2>
          <ListaMultiplicar items={elementos} />
        </>
      );
    </>*/
    
function App() {
  return (
    <>
      <ContadorReducer/>
      <FormularioReducer/>
      <AreaCirculo/>
    </>
  )
}


export default App;
