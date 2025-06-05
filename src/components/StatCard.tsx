import { NumberTicker } from "./magicui/number-ticker";

// Reusable Stat Card
export default function  StatCard({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: number;
}) {
    return (
        <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-lg font-bold text-gray-800">
                    <NumberTicker  value={value} /> 
                +
                </p>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </div>
    );
} 