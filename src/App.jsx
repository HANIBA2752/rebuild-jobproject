import './App.css';
import AppMidText from './components/AppItems/AppMidText';
import AppBox from './components/AppItems/AppBox';

const App = () => {
  return (
    <div>
      <section className='section1 h-[1000px] w-full'>
        <div >
          <AppMidText/>
        </div>
      </section>
      <section className='section2 h-[700px] flex flex-col items-center justify-center pb-[200px]'>
        <AppBox/>
      </section>
      <section className='section3 h-[500px]'>
        
      </section>
      {/* <footer className='h-[300px]'>
        <div>2024</div>
      </footer> */}
    </div>
  );
};

export default App;
