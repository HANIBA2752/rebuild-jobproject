import './App.css';
import AppMidText from './components/AppItems/AppMidText';
import AppBox from './components/AppItems/AppBox';
import DescApp from './components/AppItems/DescApp';

const App = () => {
  return (
    <div>
      <section className='section1 w-full'>
        <div >
          <AppMidText/>
        </div>
      </section>
      <section className='section2 pb-[180px] flex flex-col items-center justify-center '>
        <div >
          <AppBox/>
        </div>
      </section>
      <section className='section3 flex justify-center items-center'>
        <div className='flex justify-around items-center'>
          <DescApp/>
        </div>
      </section>
      <footer className='footer h-[500px] flex justify-center items-center bg-black text-white'>
        <div className='text-white font-sans font-extralight'>2024</div>
      </footer>
    </div>
  );
};

export default App;
