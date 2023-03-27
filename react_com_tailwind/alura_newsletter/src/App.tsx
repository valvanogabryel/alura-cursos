import Header from "./components/Header"

const styles = {
  centerOnScreen: 'h-screen flex justify-center items-center',
  mainTextStylish: 'text-center items-center text-2xl font-black border w-1/12 rounded-md shadow-lg h-10 hover:bg-slate-400 duration-300 cursor-pointer'
}

const App = () => {
  return (
    <div className={styles.centerOnScreen}>
      <Header />
    </div>
  )
}



export default App
