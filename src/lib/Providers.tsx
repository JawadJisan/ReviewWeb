"use client";

import { store } from "@/redux/store";

import { Provider } from "react-redux";
import { IChildrenNode } from "@/types";
// import StyledComponentsRegistry from './AntdRegistry';

function Providers({ children }: IChildrenNode) {
  return (
    <Provider store={store}>
      {children}
      {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
    </Provider>
  );
}

export default Providers;
