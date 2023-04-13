import React, { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProvidersWrapperProps {
	children: ReactNode;
}

const ProvidersWrapper: FC<ProvidersWrapperProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
export default ProvidersWrapper;
