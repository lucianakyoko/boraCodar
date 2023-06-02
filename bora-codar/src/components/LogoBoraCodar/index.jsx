import { Hash } from "@phosphor-icons/react";
import {
  LogoWrapper,
} from './style';

export function LogoBoraCodar() {
  return (
    <LogoWrapper>
      <Hash className="icon" weight="bold"/>
      <span className="text">boraCodar</span>     
    </LogoWrapper>
  );
}