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
  Github,
  Linkedin,
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
  Instagram,
  ArrowDown,
  Mouse,
  GraduationCap,
  Grid,
  Cog,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowUp
} from "lucide-react";

import IComponent from "@/@types";
import { IIconProps } from "./types";

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

  // Map Unicons icon names to Lucide icon components
  const iconMap: { [key: string]: LucideIcon } = {
    "angle-left": ChevronLeft,
    "angle-right": ChevronRight,
    "angle-down": ChevronDown,
    "arrow-right": ArrowRight,
    "code": Code,
    "check-circle": CircleCheck,
    "close": X,
    "ellipsis-v": Menu,
    "estate": House,
    "file-alt": FileText,
    "github-alt": Github,
    "linkedin-alt": Linkedin,
    "instagram": Instagram,
    "message": MessageSquare,
    "moon": Moon,
    "scenery": Image,
    "server-network": Server,
    "sun": Sun,
    "swatchbook": Palette,
    "times": X,
    "user": User,
    "arrow-down": ArrowDown,
    "bag": Briefcase,
    "mouse-alt": Mouse,
    "graduation-cap": GraduationCap,
    "web-grid": Grid,
    "cog": Cog,
    "envelope": Mail,
    "phone": Phone,
    "map-marker": MapPin,
    "send": Send,
    "arrow-up": ArrowUp
  };

  const IconComponent = iconMap[icon] || HelpCircle;

  return (
    <div
      className={`icon-wrapper ${fontLoaded ? "loaded" : "loading"}`}
      data-testid={testId}
    >
      <IconComponent
        id={id}
        data-testid={`${testId}-${icon}`}
        className={`${className} icon-i`}
        onClick={onClick}
        size={24}
      />
    </div>
  );
};

export { Icon };
