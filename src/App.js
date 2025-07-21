import './App.css';
import InfoPanel from './components/InfoPanel';
import ClaimForm from './components/ClaimForm';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <div className="app-container">
      {/* Main Content Wrapper */}
      <main className="main-content">
        {/* Left Column: InfoPanel and InfoSection as siblings */}
        <div className="left-column">
          <section className="info-panel">
            <InfoPanel />
          </section>
          <section className="info-section-wrapper">
            <InfoSection />
          </section>
        </div>
        {/* Claim Form Panel */}
        <section className="claim-form-panel">
          <ClaimForm />
        </section>
      </main>
    </div>
  );
}

export default App;
