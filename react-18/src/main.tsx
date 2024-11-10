import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { FormComponent } from './pages/form/ui/form';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormComponent />
  </StrictMode>,
);
