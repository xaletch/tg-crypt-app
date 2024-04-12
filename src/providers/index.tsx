import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
