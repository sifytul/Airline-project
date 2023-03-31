
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import useFetcher from "./hooks/useFetcher";



function App() {
  const {data, loading, error,filterHandler} = useFetcher()
  return (
    <div className="">
      <Header />
      <div className='max-w-screen-xl mx-auto'> 
        <HeroSection data={data} filterHandler={filterHandler} loading={loading} error={error}/>

      </div>
    </div>
  )
}

export default App
