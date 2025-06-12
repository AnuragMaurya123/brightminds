
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Instructor } from '@/constant';
import Image from 'next/image';

interface InstructorCardProps {
  instructor: Instructor;
}


const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {


  return (
    <Card className=" xl:h-[470px] h-[570px] shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105 will-change-transform bg-white border-0">
      {/* Image Section */}

      <div className="relative w-full h-[250px] overflow-hidden flex-shrink-0">
        <Image
          src={instructor.image}
          alt={instructor.name}
          width={600}
          height={440}
          className="object-cover w-full h-full min-h-[400px] max-h-[600px] transition-transform scale-100 duration-700 group-hover:scale-110"
        />
      </div>





      {/* Info Section */}
      <div className="flex flex-col flex-grow px-6 pt-4 text-center">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-lg font-bold text-gray-900">
            {instructor.name}
          </CardTitle>
          <p className="text-sm font-medium text-amber-600 mt-1">
            {instructor.title}
          </p>
        </CardHeader>

        <CardContent className="text-sm text-gray-600 px-2 pb-4">
          <p className=" ">{instructor.bio}</p>
        </CardContent>
      </div>


    </Card>
  );
};

export default InstructorCard;
