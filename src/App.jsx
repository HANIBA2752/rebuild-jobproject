import './App.css';
import AppMidText from './components/AppItems/AppMidText';
import AppBox from './components/AppItems/AppBox';

const App = () => {
  return (
    <div>
      <section className='h-[400px]'>
        <AppMidText/>
      </section>
      <section className='h-[400px]'>
        <AppBox/>
      </section>
      <footer className='mt-[500px] flex justify-center items-center text-white'>
        <div>2024</div>
      </footer>
    </div>
  );
};

export default App;
