
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ArrowLeft, Upload } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const ProgramsAttendedForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isSponsored, setIsSponsored] = useState<string>('');

  const [formData, setFormData] = useState({
    programTitle: '',
    programType: '',
    mode: '',
    duration: '',
    durationType: '',
    domain: '',
    objective: '',
    keyLearnings: '',
    contribution: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const programTypes = [
    'Faculty Development Program (FDP)',
    'Workshop',
    'Conference',
    'Seminar',
    'Webinar',
    'MOOC'
  ];

  const modes = ['Online', 'Offline', 'Hybrid'];
  const durationTypes = ['Days', 'Weeks', 'Months', 'Hours'];
  const domains = ['Own Domain', 'Related Domain', 'Other Domain'];

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold ${
            currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'
          }`}>
            {step}
          </div>
          {step < 3 && <div className="w-12 h-0.5 bg-gray-300 mx-2" />}
        </div>
      ))}
    </div>
  );

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
              <h1 className="text-2xl font-semibold text-gray-900">Programs/Workshops Attended</h1>
              <p className="text-sm text-gray-600">Submit details of FDPs, workshops, conferences, seminars, webinars, or MOOCs you have attended</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderStepIndicator()}

        <Card>
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="programTitle" className="text-sm font-medium text-gray-900">
                    Program Title *
                  </Label>
                  <Input
                    id="programTitle"
                    placeholder="Enter the full title of the program"
                    value={formData.programTitle}
                    onChange={(e) => handleInputChange('programTitle', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-900">Program Type *</Label>
                    <Select value={formData.programType} onValueChange={(value) => handleInputChange('programType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Faculty Development Program (FDP)" />
                      </SelectTrigger>
                      <SelectContent>
                        {programTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-900">Mode *</Label>
                    <Select value={formData.mode} onValueChange={(value) => handleInputChange('mode', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Online" />
                      </SelectTrigger>
                      <SelectContent>
                        {modes.map((mode) => (
                          <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-900">Start Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "dd-MM-yyyy") : "dd-mm-yyyy"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-900">End Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "dd-MM-yyyy") : "dd-mm-yyyy"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="duration" className="text-sm font-medium text-gray-900">Duration *</Label>
                    <Input
                      id="duration"
                      placeholder="1"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-900">Duration Type *</Label>
                    <Select value={formData.durationType} onValueChange={(value) => handleInputChange('durationType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Days" />
                      </SelectTrigger>
                      <SelectContent>
                        {durationTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900">Domain *</Label>
                  <Select value={formData.domain} onValueChange={(value) => handleInputChange('domain', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Own Domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between">
                  <Button onClick={prevStep} variant="outline">
                    Previous
                  </Button>
                  <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="objective" className="text-sm font-medium text-red-600">
                    Objective *
                  </Label>
                  <Textarea
                    id="objective"
                    placeholder="Describe the objective of attending this program"
                    value={formData.objective}
                    onChange={(e) => handleInputChange('objective', e.target.value)}
                    className="mt-1 min-h-[80px]"
                  />
                  <p className="text-xs text-red-500 mt-1">Objective must be at least 10 characters</p>
                </div>

                <div>
                  <Label htmlFor="keyLearnings" className="text-sm font-medium text-red-600">
                    Key Learnings *
                  </Label>
                  <Textarea
                    id="keyLearnings"
                    placeholder="Describe the key learnings from this program"
                    value={formData.keyLearnings}
                    onChange={(e) => handleInputChange('keyLearnings', e.target.value)}
                    className="mt-1 min-h-[80px]"
                  />
                  <p className="text-xs text-red-500 mt-1">Key learnings must be at least 10 characters</p>
                </div>

                <div>
                  <Label htmlFor="contribution" className="text-sm font-medium text-red-600">
                    Contribution to Institution *
                  </Label>
                  <Textarea
                    id="contribution"
                    placeholder="Describe how this program will contribute to your role and the institution"
                    value={formData.contribution}
                    onChange={(e) => handleInputChange('contribution', e.target.value)}
                    className="mt-1 min-h-[80px]"
                  />
                  <p className="text-xs text-red-500 mt-1">Contribution must be at least 10 characters</p>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-3 block">
                    Was this program sponsored?
                  </Label>
                  <RadioGroup value={isSponsored} onValueChange={setIsSponsored}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="sponsored-yes" />
                      <Label htmlFor="sponsored-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="sponsored-no" />
                      <Label htmlFor="sponsored-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-3 block">
                    Supporting Document
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
                  <p className="text-xs text-gray-600 mt-2">
                    Upload certificate, brochure, or any supporting document (Max 10MB)
                  </p>
                </div>

                <div className="flex justify-between pt-6">
                  <Button onClick={prevStep} variant="outline">
                    Previous
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Submit for Approval
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramsAttendedForm;
