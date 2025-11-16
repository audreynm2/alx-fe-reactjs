import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from './components/UserProfile';
// --- NEW IMPORT FOR TASK 1 ---
import Counter from './components/Counter'; 

function App() {
  return (
    <div style={{ paddingBottom: '50px' }}> {/* Optional: Add padding for the fixed footer */}
      <Header />
      
      {/* --- NEW COMPONENT FOR TASK 1 --- */}
      <Counter /> 

      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;