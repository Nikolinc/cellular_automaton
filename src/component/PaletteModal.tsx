import { useEffect, useRef } from "react";
import "react-color-palette/css";
import { ColorPicker, useColor } from "react-color-palette";
import useModal from "../hooks/useModal";
import React from "react";
import { useDispatch } from "react-redux";

interface ITooltipProps {
  opened: boolean;
  triggerRef?: React.RefObject<HTMLElement>;
  onClose: () => void;
  color: string;
  changeColor: Function;
}

function PaletteModal({
  opened,
  triggerRef,
  onClose,
  color,
  changeColor,
}: ITooltipProps) {
  const dispatch = useDispatch();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [colorH, setColor] = useColor(color);

  useEffect(() => {
    dispatch(changeColor(colorH.hex));
  }, [colorH]);

  useModal({
    elementRef: tooltipRef,
    triggerRef,
    onOutsideClick: onClose,
    enabled: opened,
  });

  if (!opened) {
    return null;
  }

  return (
    <div ref={tooltipRef} className="absolute right-32">
      <ColorPicker color={colorH} onChange={setColor} />
    </div>
  );
}

export default PaletteModal;
