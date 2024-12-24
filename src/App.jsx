import './App.css';
import AppMidText from './components/AppItems/AppMidText';
import AppBox from './components/AppItems/AppBox';

const App = () => {
  return (
    <div>
      <section className='section1 h-[1000px]'>
        <div >
          <AppMidText/>
        </div>
      </section>
      <section className='section2 h-[500px]'>
        <AppBox/>
      </section>
      <footer className='py-[80px] flex justify-center items-center text-white'>
        <div>2024</div>
      </footer>
    </div>
  );
};

export default App;
