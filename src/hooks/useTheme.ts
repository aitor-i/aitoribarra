import { useEffect, useState } from "react";

const useTheme: () => (
  | Boolean
  | React.Dispatch<React.SetStateAction<Boolean>>
)[] = () => {
  const [isLightTheme, setIsLightTheme] = useState<Boolean>(
    () => window.localStorage.getItem("isLightTheme") === "true" || false
  );

  useEffect(() => {
    window.localStorage.setItem("isLightTheme", isLightTheme.toString());
  }, [isLightTheme]);

  return [isLightTheme, setIsLightTheme];
};

export default useTheme;
