
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Plus, Edit, Eye, LogOut, Upload, FileText, Activity, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [recentUploads] = useState([
    { 
      id: 1, 
      title: "AI Workshop Attended", 
      type: "Programs Attended", 
      date: "2024-01-15", 
      status: "Approved by Admin",
      hodStatus: "Approved",
      adminStatus: "Approved"
    },
    { 
      id: 2, 
      title: "Data Science FDP", 
      type: "Programs Organized", 
      date: "2024-01-10", 
      status: "Pending HOD Review",
      hodStatus: "Pending",
      adminStatus: "Not Reached"
    },
    { 
      id: 3, 
      title: "Python Certification", 
      type: "Certification Programs", 
      date: "2024-01-05", 
      status: "Pending Admin Review",
      hodStatus: "Approved",
      adminStatus: "Pending"
    }
  ]);

  const [departmentUpdates] = useState([
    { id: 1, faculty: "Dr. Smith", program: "Machine Learning Workshop", date: "2024-01-20", participants: 45 },
    { id: 2, faculty: "Prof. Johnson", program: "Cloud Computing Seminar", date: "2024-01-18", participants: 32 },
    { id: 3, faculty: "Dr. Williams", program: "Cybersecurity Conference", date: "2024-01-15", participants: 78 }
  ]);

  const [uploadActivity] = useState([
    { date: "2024-01-15", activity: "AI Workshop Certificate uploaded" },
    { date: "2024-01-10", activity: "Data Science FDP organized" },
    { date: "2024-01-05", activity: "Python Certification submitted" },
    { date: "2024-01-02", activity: "Cloud Computing Workshop attended" }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved by Admin':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'Pending Admin Review':
        return <Clock className="h-4 w-4 text-orange-600" />;
      case 'Pending HOD Review':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved by Admin':
        return 'bg-green-100 text-green-800';
      case 'Pending Admin Review':
        return 'bg-orange-100 text-orange-800';
      case 'Pending HOD Review':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Faculty Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, Faculty Member</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => console.log('View all uploads')}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Uploads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => console.log('View approved uploads')}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">9</div>
              <p className="text-xs text-muted-foreground">75% approval rate</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => console.log('View pending uploads')}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 transition-colors" onClick={() => navigate('/faculty/upload-form')}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground">Upload New Content</CardTitle>
              <Plus className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Add</div>
              <p className="text-xs opacity-90">Programs & Certifications</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="updates" className="space-y-6">
          <TabsList>
            <TabsTrigger value="updates">Department Updates</TabsTrigger>
            <TabsTrigger value="my-uploads">My Uploads</TabsTrigger>
            <TabsTrigger value="calendar">Activity Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="updates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Department Activities</CardTitle>
                <CardDescription>Latest programs organized by faculty in your department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentUpdates.map((update) => (
                    <div key={update.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{update.program}</h4>
                        <p className="text-sm text-gray-600">Organized by {update.faculty}</p>
                        <p className="text-xs text-gray-500">{update.date} • {update.participants} participants</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-uploads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Uploads</CardTitle>
                <CardDescription>Your recent submissions and their detailed approval status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.map((upload) => (
                    <div key={upload.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{upload.title}</h4>
                          <p className="text-sm text-gray-600">{upload.type}</p>
                          <p className="text-xs text-gray-500">{upload.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(upload.status)}
                          <Badge className={getStatusColor(upload.status)}>
                            {upload.status}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Approval Workflow Status */}
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">HOD:</span>
                          <Badge variant={upload.hodStatus === 'Approved' ? 'default' : upload.hodStatus === 'Pending' ? 'secondary' : 'destructive'}>
                            {upload.hodStatus}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Admin:</span>
                          <Badge variant={upload.adminStatus === 'Approved' ? 'default' : upload.adminStatus === 'Pending' ? 'secondary' : 'outline'}>
                            {upload.adminStatus}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Activity Calendar
                  </CardTitle>
                  <CardDescription>Track your upload and participation timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest uploads and participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {uploadActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">{activity.activity}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FacultyDashboard;
