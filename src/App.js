
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing';
import NotesPage from './components/Notes';
import AssistantPage from './components/Assistant';
import DocExtractorPage from './components/DocExtractor';
import VisitPage from './components/Visits';
import Layout from './layouts/Layout';

const App = () => (
  <Router>
    <Routes>
      {/* Landing page without header or sidebar */}
      <Route path="/" element={<LandingPage />} />

      {/* Pages with header and sidebar */}
      <Route
        path="/visits"
        element={
          <Layout>
            <VisitPage />
          </Layout>
        }
      />
      <Route
        path="/notes"
        element={
          <Layout>
            <NotesPage />
          </Layout>
        }
      />
      <Route
        path="/assistant"
        element={
          <Layout>
            <AssistantPage />
          </Layout>
        }
      />
      <Route
        path="/extractor"
        element={
          <Layout>
            <DocExtractorPage />
          </Layout>
        }
      />

    </Routes>
  </Router>
);

export default App;