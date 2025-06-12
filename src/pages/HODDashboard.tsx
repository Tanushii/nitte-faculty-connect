
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Users, FileText, CheckCircle, Clock, Eye, ThumbsUp, ThumbsDown } from 'lucide-react';

const HODDashboard = () => {
  const navigate = useNavigate();
  const [stats] = useState({
    totalFaculties: 12,
    totalUploads: 47,
    pendingApprovals: 8,
    approvedSubmissions: 39
  });

  const [facultyUploads] = useState([
    { 
      id: 1, 
      faculty: "Dr. Sarah Johnson", 
      title: "AI Workshop", 
      type: "Programs Attended", 
      date: "2024-01-20", 
      status: "Pending",
      avatar: "/api/placeholder/40/40"
    },
    { 
      id: 2, 
      faculty: "Prof. Mike Chen", 
      title: "Data Science FDP", 
      type: "Programs Organized", 
      date: "2024-01-19", 
      status: "Pending",
      avatar: "/api/placeholder/40/40"
    },
    { 
      id: 3, 
      faculty: "Dr. Emily Davis", 
      title: "Python Certification", 
      type: "Certification Programs", 
      date: "2024-01-18", 
      status: "Approved",
      avatar: "/api/placeholder/40/40"
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const handleApproval = (uploadId: number, action: 'approve' | 'disapprove') => {
    console.log(`${action} upload ${uploadId}`);
    // Handle approval logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">HOD Dashboard</h1>
              <p className="text-sm text-gray-600">Department Management Portal</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Faculties</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalFaculties}</div>
              <p className="text-xs text-muted-foreground">In your department</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Uploads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUploads}</div>
              <p className="text-xs text-muted-foreground">Click to view all uploads</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">Awaiting your review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.approvedSubmissions}</div>
              <p className="text-xs text-muted-foreground">Successfully approved</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
            <TabsTrigger value="all-uploads">All Uploads</TabsTrigger>
            <TabsTrigger value="faculty-list">Faculty Details</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Review and approve faculty submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Faculty</TableHead>
                      <TableHead>Submission</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facultyUploads.filter(upload => upload.status === 'Pending').map((upload) => (
                      <TableRow key={upload.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={upload.avatar} />
                              <AvatarFallback>{upload.faculty.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{upload.faculty}</span>
                          </div>
                        </TableCell>
                        <TableCell>{upload.title}</TableCell>
                        <TableCell>{upload.type}</TableCell>
                        <TableCell>{upload.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => console.log('View details')}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="default"
                              onClick={() => handleApproval(upload.id, 'approve')}
                            >
                              <ThumbsUp className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleApproval(upload.id, 'disapprove')}
                            >
                              <ThumbsDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all-uploads">
            <Card>
              <CardHeader>
                <CardTitle>All Faculty Uploads</CardTitle>
                <CardDescription>Complete history of department submissions (most recent first)</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Faculty</TableHead>
                      <TableHead>Submission</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facultyUploads.map((upload) => (
                      <TableRow key={upload.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={upload.avatar} />
                              <AvatarFallback>{upload.faculty.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{upload.faculty}</span>
                          </div>
                        </TableCell>
                        <TableCell>{upload.title}</TableCell>
                        <TableCell>{upload.type}</TableCell>
                        <TableCell>{upload.date}</TableCell>
                        <TableCell>
                          <Badge variant={upload.status === 'Approved' ? 'default' : 'secondary'}>
                            {upload.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty-list">
            <Card>
              <CardHeader>
                <CardTitle>Department Faculty</CardTitle>
                <CardDescription>Faculty members and their submission statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Faculty list would go here */}
                  <p className="text-center text-gray-500 py-8">Faculty details will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HODDashboard;
