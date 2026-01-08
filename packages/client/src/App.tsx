import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '@tetrascience-npm/tetrascience-react-ui/index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DataTablePage from './pages/DataTablePage';
import FormsPage from './pages/FormsPage';
import ChartsPage from './pages/ChartsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="data-table" element={<DataTablePage />} />
          <Route path="forms" element={<FormsPage />} />
          <Route path="charts" element={<ChartsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;