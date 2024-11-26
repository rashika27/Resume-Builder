import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./components/FormComponent";
import ResumePreview from "./components/ResumePreview";
import ThemeSwitcher from "./components/ThemeSwitch";
import SavePDF from "./components/SavePdf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // State to manage layout visibility
  const [showBasic, setShowBasic] = useState(true);
  const [showStyled, setShowStyled] = useState(false);

  // Function to handle saving the form and triggering layout visibility
  const handleSave = () => {
    setShowBasic(true);
    setShowStyled(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Form onSave={handleSave} />} />
          <Route
            path="/resume-preview"
            element={
              <ResumePreview
              />
            }
          />
          <Route path="/save-pdf" element={<SavePDF />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
