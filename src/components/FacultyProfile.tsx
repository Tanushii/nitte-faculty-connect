
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface FacultyProfileProps {
  name?: string;
  role?: string;
  department?: string;
  className?: string;
}

const FacultyProfile: React.FC<FacultyProfileProps> = ({ 
  name = "Dr. John Smith",
  role = "Faculty",
  department = "Computer Science & Engineering",
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border ${className}`}>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600">
          <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
          {role} • {department}
        </p>
      </div>
      <Avatar className="h-12 w-12 bg-blue-600">
        <AvatarFallback className="bg-blue-600 text-white">
          <User className="h-6 w-6" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default FacultyProfile;
