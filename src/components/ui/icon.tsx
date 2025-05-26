import React from "react";
import {
  Clock,
  Target,
  Users,
  Play,
  CheckCircle2,
  Unlock,
  Lock,
  ArrowRight,
  TrendingUp,
  BookOpen,
  UserPlus,
  MessageCircle,
} from "lucide-react";

const iconMap = {
  Clock,
  Target,
  Users,
  Play,
  CheckCircle2,
  Unlock,
  Lock,
  ArrowRight,
  TrendingUp,
  BookOpen,
  UserPlus,
  MessageCircle,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "Target",
}) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
