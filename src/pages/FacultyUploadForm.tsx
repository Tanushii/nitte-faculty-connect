
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, Calendar, Award } from 'lucide-react';
import FacultyProfile from '@/components/FacultyProfile';

const FacultyUploadForm = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    {
      id: 'programs-attended',
      title: 'Programs I have Attended',
      description: 'Upload details of workshops, FDPs, conferences, seminars, webinars, and short-term training programs you have attended.',
      icon: Users,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      id: 'programs-organized',
      title: 'Programs I have Organized',
      description: 'Upload details of FDPs, workshops, seminars, expert lectures, and other programs you have organized or coordinated.',
      icon: Calendar,
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      id: 'certification-programs',
      title: 'Upskilling / Certification Programs',
      description: 'Upload certificates from NPTEL, Coursera, Swayam, edX, AICTE ATAL, and other online learning platforms.',
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
              <p className="text-sm text-gray-600">Choose the type of program or certification you want to upload</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Faculty Profile */}
        <FacultyProfile className="mb-8" />

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Select Upload Category</h2>
          <p className="text-gray-600">Please select the appropriate category that best matches your content.</p>
        </div>

        <div className="space-y-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all duration-200 border-2 ${
                  selectedCategory === category.id 
                    ? 'border-primary bg-primary/5' 
                    : category.color
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg shadow-sm ${
                      selectedCategory === category.id ? 'bg-primary text-white' : 'bg-white'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex gap-4">
          <Button 
            onClick={() => navigate('/faculty-dashboard')}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button 
            onClick={() => selectedCategory && handleCategorySelect(selectedCategory)}
            disabled={!selectedCategory}
            className="flex-1"
          >
            Continue to Form
          </Button>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Upload Guidelines</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Ensure all documents are in PDF format and clearly readable</li>
            <li>• Include complete program details such as dates, duration, and organizer information</li>
            <li>• Upload certificates or participation documents as supporting evidence</li>
            <li>• All submissions will be reviewed by your HOD before final approval</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacultyUploadForm;
