interface ITooltipProps {
  opened: boolean;
  triggerRef?: React.RefObject<HTMLElement>;
  onClose: () => void;
}

export type { ITooltipProps };
