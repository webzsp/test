import * as React from 'react';

export default function useFontSize(size: string = 'default') {
  const [fontSize, setFontSize] = React.useState(20);

  React.useEffect(() => {
    size === 'default' ? setFontSize(20) : setFontSize(40);
  }, [size]);

  return fontSize;
}
