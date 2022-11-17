import Header from "@app/common/components/header/header.component";
import MenuList from "@app/modules/menu/components/menu-list/menu-list.component";
import Footer from "@app/common/components/footer/footer.component";
import pizzaMenu from '@app/mokcs/pizza.json';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='mt-12 mb-24'>
          <MenuList items={pizzaMenu}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
