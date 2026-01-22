
import { Prize } from './types';

export const PRIZES: Prize[] = [
  { id: 1, label: "設備折價券$2000元", probability: 5, color: "#EF4444", icon: "fa-crown" },
  { id: 2, label: "設備折價券$1000元", probability: 8, color: "#F59E0B", icon: "fa-award" },
  { id: 3, label: "設備折價券$500元", probability: 12, color: "#3B82F6", icon: "fa-tools" },
  { id: 4, label: "設備折價券$300元", probability: 15, color: "#10B981", icon: "fa-cog" },
  { id: 5, label: "耗材優惠券$500元", probability: 12, color: "#8B5CF6", icon: "fa-tags" },
  { id: 6, label: "耗材優惠券$300元", probability: 15, color: "#EC4899", icon: "fa-tag" },
  { id: 7, label: "威笙品牌好禮", probability: 15, color: "#6366F1", icon: "fa-gift" },
  { id: 8, label: "幸運小禮", probability: 18, color: "#94A3B8", icon: "fa-smile" },
];

export const APP_THEME = {
  primary: "#1e3a8a", // Wilson Blue
  secondary: "#fbbf24", // Gold
  accent: "#ef4444", // Red
};
