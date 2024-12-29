import './App.css';
import AppMidText from './components/AppItems/AppMidText';
import AppBox from './components/AppItems/AppBox';
import DescApp from './components/AppItems/DescApp';

const App = () => {
  return (
    <div>
      <section className="section1">
        <div className='App-topic'>
          <AppMidText />
        </div>
      </section>
      <section className="section2 flex flex-col items-center justify-center">
        <div className="px-4 max-w-screen">
          <div className='mt-10'>
            <AppBox />
          </div>
        </div>
      </section>
      <section className="section3 flex justify-center items-center px-4">
        <div className="flex flex-wrap justify-around items-center">
          <DescApp />
        </div>
      </section>
      <section className='flex justify-around items-center '>
        <div className="grid grid-cols-5 grid-rows-1 gap-4 bg-neutral-900 text-white p-4 shadow-lg">
          <div className="flex flex-col justify-center items-center bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Jobsdb</h2>
            <p className="text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">JobThai</h2>
            <p className="text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">JobTH</h2>
            <p className="text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">JobBkk</h2>
            <p className="text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">JobTopGun</h2>
            <p className="text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="text-white text-sm font-extralight text-center px-4">
          Copyright © 2024 PosExplorer All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default App;