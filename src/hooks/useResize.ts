import React, { useEffect } from "react";

import { SizeSelector } from "../store/slices/SizeSlices";
import { useSelector } from "react-redux";

function useResize() {
  const ref = React.useRef<HTMLImageElement | HTMLDivElement>(null);

  const Width = useSelector(SizeSelector.getWidth);
  const Height = useSelector(SizeSelector.getHeight);

  console.log("numRows", Width);
  console.log("numCols", Height);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    let rect: any;

    if (!rect) {
      rect = ref?.current?.getBoundingClientRect() as DOMRect;
    }

    const width = `${Width}px`;
    const height = `${Height}px`;

    ref?.current?.style.setProperty("--width", width);
    ref?.current?.style.setProperty("--height", height);
  }, [Width, Height]);

  return ref;
}

export default useResize;
