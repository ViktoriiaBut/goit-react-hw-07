import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



function App() {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch()
 }, [dispatch]);
   return (
   <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
   </div>
  );
};

export default App;
