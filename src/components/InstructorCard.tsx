
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Instructor } from '@/constant';
import Image from 'next/image';

interface InstructorCardProps {
  instructor: Instructor;
}

const colorVariants = [
  'bg-gradient-to-r from-blue-500 to-blue-600',
  'bg-gradient-to-r from-green-500 to-green-600',
  'bg-gradient-to-r from-purple-500 to-purple-600',
  'bg-gradient-to-r from-pink-500 to-pink-600',
  'bg-gradient-to-r from-indigo-500 to-indigo-600',
  'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black',
];

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {


  return (
    <Card className="group flex flex-col justify-between h-[580px] w-full rounded-3xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>


      {/* Info Section */}
      <div className="flex flex-col flex-grow px-6 pt-4 text-center">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-lg font-bold text-gray-900">
            {instructor.name}
          </CardTitle>
          <p className="text-sm font-medium text-indigo-600 mt-1">
            {instructor.title}
          </p>
        </CardHeader>

        <CardContent className="text-sm text-gray-600 px-2 pb-4">
          <p className="line-clamp-3">{instructor.bio}</p>
        </CardContent>
      </div>

      {/* Specialties */}
      <CardFooter className="flex flex-wrap justify-center gap-2 px-4 pb-6">
        {instructor.specialties.slice(0, 4).map((tag, i) => (
          <span
            key={i}
            className={`px-3 py-1 text-xs font-semibold rounded-full text-white shadow transition-all duration-200 hover:scale-105 ${colorVariants[i % colorVariants.length]}`}
          >
            {tag}
          </span>
        ))}

        {instructor.specialties.length > 4 && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800 shadow">
            +{instructor.specialties.length - 4} more
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default InstructorCard;
