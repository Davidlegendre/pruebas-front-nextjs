import "../styles/globals.css";
import "../styles/libs/fabric.min.css";
import { AuthProvider } from "../components/auth/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="ms-Fabric" dir="ltr">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
