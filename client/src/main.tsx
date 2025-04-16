import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')

if (container) {
  createRoot(container!).render(
    <StrictMode>
      <Provider store={store}>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
            audience: import.meta.env.VITE_AUTH0_AUDIENCE
          }}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
