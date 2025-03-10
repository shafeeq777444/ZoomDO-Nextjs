import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamVideoProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    );
};

export default RootLayout;
