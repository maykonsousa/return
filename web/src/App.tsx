import { Router } from "./Routes";
import { StoreProvider } from "./store/Context";

export function App() {
  return (
    <>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </>
  );
}
