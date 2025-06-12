
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Eye, LogOut, Upload, FileText, Activity } from 'lucide-react';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [recentUploads] = useState([
    { id: 1, title: "AI Workshop Attended", type: "Programs Attended", date: "2024-01-15", status: "Approved" },
    { id: 2, title: "Data Science FDP", type: "Programs Organized", date: "2024-01-10", status: "Pending" },
    { id: 3, title: "Python Certification", type: "Certification Programs", date: "2024-01-05", status: "Approved" }
  ]);

  const [departmentUpdates] = useState([
    { id: 1, faculty: "Dr. Smith", program: "Machine Learning Workshop", date: "2024-01-20", participants: 45 },
    { id: 2, faculty: "Prof. Johnson", program: "Cloud Computing Seminar", date: "2024-01-18", participants: 32 },
    { id: 3, faculty: "Dr. Williams", program: "Cybersecurity Conference", date: "2024-01-15", participants: 78 }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Uploads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
              <p className="text-xs text-muted-foreground">75% approval rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
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
                <CardDescription>Your recent submissions and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.map((upload) => (
                    <div key={upload.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{upload.title}</h4>
                        <p className="text-sm text-gray-600">{upload.type}</p>
                        <p className="text-xs text-gray-500">{upload.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={upload.status === 'Approved' ? 'default' : 'secondary'}>
                          {upload.status}
                        </Badge>
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
        </Tabs>
      </div>
    </div>
  );
};

export default FacultyDashboard;
