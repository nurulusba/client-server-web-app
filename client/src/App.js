import './App.css';
import UniversityCourseStudent from './UniversityCourseStudent';
import UniversityCourseModulePanel from './UniversityCourseModulePanel';
import Modules from './Modules';

function App() {
  return (
    <div className="App">
  <UniversityCourseStudent name="James" studentId="1" courseName="Computer Science" courseStartDate="20 January 2021" />
  <UniversityCourseModulePanel />
  <Modules />
    </div>
  );
}

export default App;
