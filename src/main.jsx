import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SafeArea } from 'capacitor-plugin-safe-area';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@squareetlabs/capacitor-navigation-bar';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css'
//

StatusBar.setOverlaysWebView({ overlay: true });
StatusBar.setStyle({ style: Style.Light });

NavigationBar.setTransparency({ isTransparent: true });

SafeArea.getSafeAreaInsets().then(({ insets }) => {
	document.documentElement.style.setProperty("--safe-area-inset-top", `${insets.top}px`);
	document.documentElement.style.setProperty("--safe-area-inset-bottom", `${insets.bottom}px`);
});

//

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </StrictMode>,
)
