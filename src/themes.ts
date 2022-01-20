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
  backgroundColor: "#f2f2f2",
  secondaryColor: "#002bd8",
  titleSize: "3rem",
  subtitleSize: "1.5rem",
  textSize: "1rem",
};
