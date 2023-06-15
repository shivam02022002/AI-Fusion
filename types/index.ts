import { ReactNode } from "react";


export interface themeContext  {
    theme: string,
    handleThemeSwitch: Function
}

export type theme = {
    theme?: string
};

export type NavbarContext = {
    theme?: string,
    handleThemeSwitch: any
}


export interface AllPropsFromLayout {
  children?: ReactNode
};

export interface Theme {
  theme: string,
};

export interface CardsProp {
    tools: boolean,
    prompts: boolean,
    datasets: boolean
}

