export interface ThemeType {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  titleSize: string;
  subtitleSize: string;
  textSize: string;
}

export const theme: ThemeType = {
  primaryColor: "#f2f2f2",
  backgroundColor: "#282c34",
  secondaryColor: "#ffcc00",
  titleSize: "3rem",
  subtitleSize: "1.5rem",
  textSize: "1rem",
};

export const lightTheme: ThemeType = {
  primaryColor: "#212121",
  backgroundColor: "d2d2d2",
  secondaryColor: "#37933A",
  titleSize: "3rem",
  subtitleSize: "1.5rem",
  textSize: "1rem",
};
