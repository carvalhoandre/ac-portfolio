import { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Code,
  CircleCheck,
  X,
  Menu,
  House,
  FileText,
  MessageSquare,
  Moon,
  Image,
  Server,
  Sun,
  Palette,
  User,
  Briefcase,
  HelpCircle,
  LucideIcon,
  ArrowDown,
  Mouse,
  GraduationCap,
  Grid,
  Cog,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowUp,
  Download,
  Calendar,
  ChevronDownIcon,
} from "lucide-react";

import IComponent from "@/@types";
import { IIconProps } from "./types";

import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

import "./styles.css";

const Icon: IComponent<IIconProps> = ({
  testId = "icon",
  id,
  icon,
  className = "",
  onClick,
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  const iconMap: { [key: string]: LucideIcon | string } = {
    "angle-left": ChevronLeft,
    "angle-right": ChevronRight,
    "angle-down": ChevronDown,
    "arrow-right": ArrowRight,
    code: Code,
    "check-circle": CircleCheck,
    close: X,
    "ellipsis-v": Menu,
    estate: House,
    "file-alt": FileText,
    "github-alt": Github,
    "linkedin-alt": LinkedIn,
    message: MessageSquare,
    moon: Moon,
    scenery: Image,
    "server-network": Server,
    sun: Sun,
    swatchbook: Palette,
    times: X,
    user: User,
    "arrow-down": ArrowDown,
    bag: Briefcase,
    "mouse-alt": Mouse,
    "graduation-cap": GraduationCap,
    "web-grid": Grid,
    cog: Cog,
    envelope: Mail,
    phone: Phone,
    "map-marker": MapPin,
    send: Send,
    "arrow-up": ArrowUp,
    download: Download,
    calendar: Calendar,
    "chevron-down": ChevronDownIcon,
  };

  const IconComponent = iconMap[icon] || HelpCircle;

  return (
    <div
      className={`icon-wrapper ${fontLoaded ? "loaded" : "loading"}`}
      data-testid={testId}
    >
      {typeof IconComponent === "string" ? (
        <img
          id={id}
          src={IconComponent}
          data-testid={`${testId}-${icon}`}
          className={`${className} icon-i`}
          onClick={onClick}
          alt={icon}
          width={24}
          height={24}
        />
      ) : (
        <IconComponent
          id={id}
          data-testid={`${testId}-${icon}`}
          className={`${className} icon-i`}
          onClick={onClick}
          size={24}
        />
      )}
    </div>
  );
};

export { Icon };
