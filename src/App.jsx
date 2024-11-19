import AppLayout from "./components/layout/appLayout.jsx";
import {CryptoContextProvider} from "./context/crypto-context.jsx";


export default function App() {
    return (
        <CryptoContextProvider>
            <AppLayout></AppLayout>
        </CryptoContextProvider>
    )
}
