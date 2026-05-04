import { SideMenuProvider } from "./contexts/SideMenuProvider";
import { AppLayout } from "./layouts/AppLayout";

function App() {
  return (
    <SideMenuProvider>
      <AppLayout />
    </SideMenuProvider>
  );
}

export default App;
