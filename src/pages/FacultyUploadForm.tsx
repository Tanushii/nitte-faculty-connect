
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, Calendar, Award } from 'lucide-react';

const FacultyUploadForm = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    {
      id: 'programs-attended',
      title: 'Programs Attended by Faculty',
      description: 'Includes workshops, FDPs, conferences, seminars, webinars, short-term training, etc.',
      icon: Users,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      id: 'programs-organized',
      title: 'Programs Organized by Faculty',
      description: 'Includes FDPs, workshops, seminars, expert lectures, etc., organized by the faculty or department.',
      icon: Calendar,
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      id: 'certification-programs',
      title: 'Upskilling / Certification Programs Attended',
      description: 'Includes NPTEL, Coursera, Swayam, edX, AICTE ATAL, etc.',
      icon: Award,
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Navigate to specific form based on category
    navigate(`/faculty/form/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button 
              onClick={() => navigate('/faculty-dashboard')} 
              variant="ghost" 
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Upload New Content</h1>
              <p className="text-sm text-gray-600">Select the type of content you want to upload</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all duration-200 ${category.color}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white shadow-sm">
                      <IconComponent className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full" variant="outline">
                    Select This Category
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-800 text-sm">
            Choose the appropriate category that best matches your content. Each category has specific 
            fields and requirements to ensure proper documentation and approval process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyUploadForm;
