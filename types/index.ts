import React, { ReactNode } from "react";

import type { ImageProps } from "next/image";

export interface IAvatar extends ImageProps {
  rounded?: boolean;
}

export interface IEditorTab {
  id: number;
  Icon: React.ElementType;
  iconProps?: { color: string; size: number };
  name: string;
  path: string;
}

export interface IOpenTagToUI {
  name: string;
  bracketSize: number;
  size: number;
  children: ReactNode;
  color: string;
}

export interface ISideNavItem {
  id: number;
  Icon: React.ElementType;
  iconProps: { size: number; color: string };
  path: string;
  name: string;
}

export interface ISidePanelTab {
  id: number;
  name: string;
}

export interface IWindowControlButton {
  id: number;
  color: string;
}
