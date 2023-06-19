import { type AppType } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'});
  }, [pathname]);
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
