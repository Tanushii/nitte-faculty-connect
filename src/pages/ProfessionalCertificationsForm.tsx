
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProfessionalCertificationsForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    facultyName: 'Dr. John Smith',
    department: 'Computer Science & Engineering',
    designation: 'Assistant Professor',
    institution: 'NMIT',
    courseName: '',
    domain: '',
    platform: '',
    duration: '',
    durationType: '',
    mode: 'Online',
    certificationStatus: 'Completed',
    relevanceToTeaching: '',
    implementationInTeaching: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const platforms = [
    'NPTEL',
    'Coursera',
    'Swayam',
    'edX',
    'AICTE ATAL',
    'Other'
  ];

  const durationTypes = ['Hours', 'Days', 'Weeks', 'Months'];
  const certificationStatuses = ['Completed', 'In Progress'];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button onClick={() => navigate('/faculty/upload-form')} variant="ghost" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Selection
            </Button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Professional Certifications</h1>
              <p className="text-sm text-gray-600">Submit your professional certifications and online course completions</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardContent className="p-8 space-y-8">
            {/* Faculty Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Faculty Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="facultyName" className="text-sm font-medium text-gray-900">Faculty Name</Label>
                  <Input
                    id="facultyName"
                    value={formData.facultyName}
                    readOnly
                    className="mt-1 bg-gray-50"
                  />
                </div>
                <div>
                  <Label htmlFor="department" className="text-sm font-medium text-gray-900">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    readOnly
                    className="mt-1 bg-gray-50"
                  />
                </div>
                <div>
                  <Label htmlFor="designation" className="text-sm font-medium text-gray-900">Designation</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    readOnly
                    className="mt-1 bg-gray-50"
                  />
                </div>
                <div>
                  <Label htmlFor="institution" className="text-sm font-medium text-gray-900">Institution</Label>
                  <Input
                    id="institution"
                    value={formData.institution}
                    readOnly
                    className="mt-1 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Details</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="courseName" className="text-sm font-medium text-gray-900">
                    Name of the Course
                  </Label>
                  <Input
                    id="courseName"
                    placeholder="Enter course name"
                    value={formData.courseName}
                    onChange={(e) => handleInputChange('courseName', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="domain" className="text-sm font-medium text-gray-900">Domain</Label>
                  <Input
                    id="domain"
                    placeholder="e.g., Computer Science, AI/ML, Data Science"
                    value={formData.domain}
                    onChange={(e) => handleInputChange('domain', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900">Platform</Label>
                  <Select value={formData.platform} onValueChange={(value) => handleInputChange('platform', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((platform) => (
                        <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="duration" className="text-sm font-medium text-gray-900">Duration</Label>
                    <Input
                      id="duration"
                      placeholder="Enter duration"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-900">Duration Type</Label>
                    <Select value={formData.durationType} onValueChange={(value) => handleInputChange('durationType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {durationTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-900">Mode</Label>
                    <Select value={formData.mode} onValueChange={(value) => handleInputChange('mode', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Online">Online</SelectItem>
                        <SelectItem value="Offline">Offline</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900">Certification Status</Label>
                  <Select value={formData.certificationStatus} onValueChange={(value) => handleInputChange('certificationStatus', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {certificationStatuses.map((status) => (
                        <SelectItem key={status} value={status}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Relevance & Implementation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Relevance & Implementation</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="relevanceToTeaching" className="text-sm font-medium text-gray-900">
                    Relevance to Teaching/Research
                  </Label>
                  <Textarea
                    id="relevanceToTeaching"
                    placeholder="Explain how this certification is relevant to your teaching or research work"
                    value={formData.relevanceToTeaching}
                    onChange={(e) => handleInputChange('relevanceToTeaching', e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="implementationInTeaching" className="text-sm font-medium text-gray-900">
                    Implementation in Teaching/Research
                  </Label>
                  <Textarea
                    id="implementationInTeaching"
                    placeholder="Specify where and how you have implemented the gained skills in your teaching or research"
                    value={formData.implementationInTeaching}
                    onChange={(e) => handleInputChange('implementationInTeaching', e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Certificate Upload */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificate Upload</h3>
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-3 block">
                  Upload Certificate (Required for completed courses)
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="text-blue-600 cursor-pointer">Drop files here or browse</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Upload PDF, DOC, DOCX, JPG, or PNG files (max 10MB)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button onClick={() => navigate('/faculty/upload-form')} variant="outline">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Submit Certification Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalCertificationsForm;
