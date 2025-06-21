
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
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const ProgramsOrganizedForm = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [targetAudience, setTargetAudience] = useState<string[]>([]);
  const [budgetRequired, setBudgetRequired] = useState<string>('');

  const [formData, setFormData] = useState({
    facultyName: 'Dr. John Smith',
    department: 'Computer Science & Engineering',
    designation: 'Assistant Professor',
    roleInProgram: '',
    programTitle: '',
    programType: '',
    mode: '',
    duration: '',
    durationType: '',
    totalParticipants: '',
    collaboratingPartners: '',
    objectivesAchieved: '',
    participantFeedback: '',
    publicationsMedia: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTargetAudienceChange = (audience: string, checked: boolean) => {
    if (checked) {
      setTargetAudience(prev => [...prev, audience]);
    } else {
      setTargetAudience(prev => prev.filter(item => item !== audience));
    }
  };

  const roles = ['Convenor', 'Coordinator', 'Co-organizer', 'Resource Person'];
  const programTypes = ['FDP', 'Workshop', 'Lecture Series', 'Conference'];
  const modes = ['Online', 'Offline', 'Hybrid'];
  const durationTypes = ['Days', 'Weeks', 'Months', 'Hours'];
  const audienceOptions = ['Faculty', 'Students', 'Industry', 'Researchers'];

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
              <h1 className="text-2xl font-semibold text-gray-900">Programs/Workshops Organized</h1>
              <p className="text-sm text-gray-600">Submit details of programs you have organized or coordinated</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardContent className="p-8 space-y-8">
            {/* Organizer Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organizer Details</h3>
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
                  <Label className="text-sm font-medium text-gray-900">Role in Program</Label>
                  <Select value={formData.roleInProgram} onValueChange={(value) => handleInputChange('roleInProgram', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Program Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Information</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="programTitle" className="text-sm font-medium text-gray-900">Program Title</Label>
                  <Input
                    id="programTitle"
                    placeholder="Enter program title"
                    value={formData.programTitle}
                    onChange={(e) => handleInputChange('programTitle', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-900">Program Type</Label>
                    <Select value={formData.programType} onValueChange={(value) => handleInputChange('programType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select program type" />
                      </SelectTrigger>
                      <SelectContent>
                        {programTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-900">Mode</Label>
                    <Select value={formData.mode} onValueChange={(value) => handleInputChange('mode', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        {modes.map((mode) => (
                          <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-900">Start Date</Label>
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
                    <Label className="text-sm font-medium text-gray-900">End Date</Label>
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
                    <Label htmlFor="totalParticipants" className="text-sm font-medium text-gray-900">Total Participants</Label>
                    <Input
                      id="totalParticipants"
                      placeholder="Number of participants"
                      value={formData.totalParticipants}
                      onChange={(e) => handleInputChange('totalParticipants', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-3 block">Target Audience</Label>
                  <div className="flex gap-6">
                    {audienceOptions.map((audience) => (
                      <div key={audience} className="flex items-center space-x-2">
                        <Checkbox
                          id={audience}
                          checked={targetAudience.includes(audience)}
                          onCheckedChange={(checked) => handleTargetAudienceChange(audience, checked as boolean)}
                        />
                        <Label htmlFor={audience} className="text-sm">{audience}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="collaboratingPartners" className="text-sm font-medium text-gray-900">
                    Collaborating Partners (if any)
                  </Label>
                  <Textarea
                    id="collaboratingPartners"
                    placeholder="Enter collaborating partners"
                    value={formData.collaboratingPartners}
                    onChange={(e) => handleInputChange('collaboratingPartners', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Budget Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Information</h3>
              <RadioGroup value={budgetRequired} onValueChange={setBudgetRequired}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="required" id="budget-required" />
                  <Label htmlFor="budget-required">Budget Approval Required</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Outcome & Impact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Outcome & Impact</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="objectivesAchieved" className="text-sm font-medium text-gray-900">
                    Objectives Achieved / Outcome Summary
                  </Label>
                  <Textarea
                    id="objectivesAchieved"
                    placeholder="Describe the objectives achieved and overall outcome of the program"
                    value={formData.objectivesAchieved}
                    onChange={(e) => handleInputChange('objectivesAchieved', e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="participantFeedback" className="text-sm font-medium text-gray-900">
                    Participant Feedback Summary
                  </Label>
                  <Textarea
                    id="participantFeedback"
                    placeholder="Summarize the feedback received from participants"
                    value={formData.participantFeedback}
                    onChange={(e) => handleInputChange('participantFeedback', e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="publicationsMedia" className="text-sm font-medium text-gray-900">
                    Publications/Media Coverage (Links)
                  </Label>
                  <Textarea
                    id="publicationsMedia"
                    placeholder="Enter links to publications, media coverage, or social media posts"
                    value={formData.publicationsMedia}
                    onChange={(e) => handleInputChange('publicationsMedia', e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Supporting Documents */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Supporting Documents</h3>
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-3 block">
                  Upload Brochure/Flyer/Report (Optional)
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
                Submit Program Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramsOrganizedForm;
