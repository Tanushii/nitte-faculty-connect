
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { LogOut, Users, FileText, CheckCircle, Clock, Eye, ThumbsUp, ThumbsDown, Search, Mail, Phone } from 'lucide-react';

const HODDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
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

  const [facultyList] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Professor",
      department: "Computer Science",
      email: "sarah.johnson@nmit.ac.in",
      phone: "+91 9876543210",
      avatar: "/api/placeholder/60/60",
      uploads: 15,
      lastActive: "2024-01-20"
    },
    {
      id: 2,
      name: "Prof. Mike Chen",
      position: "Associate Professor",
      department: "Computer Science", 
      email: "mike.chen@nmit.ac.in",
      phone: "+91 9876543211",
      avatar: "/api/placeholder/60/60",
      uploads: 12,
      lastActive: "2024-01-19"
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      position: "Assistant Professor",
      department: "Computer Science",
      email: "emily.davis@nmit.ac.in", 
      phone: "+91 9876543212",
      avatar: "/api/placeholder/60/60",
      uploads: 8,
      lastActive: "2024-01-18"
    },
    {
      id: 4,
      name: "Prof. Robert Wilson",
      position: "Associate Professor",
      department: "Computer Science",
      email: "robert.wilson@nmit.ac.in",
      phone: "+91 9876543213", 
      avatar: "/api/placeholder/60/60",
      uploads: 20,
      lastActive: "2024-01-17"
    }
  ]);

  const [recentlyViewed] = useState([
    { id: 1, name: "Dr. Sarah Johnson", position: "Professor", avatar: "/api/placeholder/40/40" },
    { id: 2, name: "Prof. Mike Chen", position: "Associate Professor", avatar: "/api/placeholder/40/40" },
    { id: 3, name: "Dr. Emily Davis", position: "Assistant Professor", avatar: "/api/placeholder/40/40" }
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

  const filteredFaculty = facultyList.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <TabsTrigger value="faculty-details">Faculty Details</TabsTrigger>
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

          <TabsContent value="faculty-details">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Search & Details</CardTitle>
                <CardDescription>Search and view faculty profiles in your department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search faculty by name or position..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Recently Viewed Profiles */}
                {!searchQuery && (
                  <div>
                    <h3 className="text-lg font-medium mb-3">Recently Viewed Profiles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                      {recentlyViewed.map((faculty) => (
                        <Card key={faculty.id} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={faculty.avatar} />
                                <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{faculty.name}</h4>
                                <p className="text-sm text-gray-600">{faculty.position}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Faculty Search Results */}
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {searchQuery ? `Search Results (${filteredFaculty.length})` : `All Faculty (${facultyList.length})`}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredFaculty.map((faculty) => (
                      <Card key={faculty.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={faculty.avatar} />
                              <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{faculty.name}</h4>
                              <p className="text-blue-600 font-medium">{faculty.position}</p>
                              <p className="text-sm text-gray-600 mb-2">{faculty.department}</p>
                              
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Mail className="h-4 w-4" />
                                  <span>{faculty.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" />
                                  <span>{faculty.phone}</span>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center mt-3">
                                <div className="text-sm">
                                  <span className="font-medium">{faculty.uploads}</span> uploads
                                </div>
                                <div className="text-xs text-gray-500">
                                  Last active: {faculty.lastActive}
                                </div>
                              </div>
                              
                              <Button variant="outline" size="sm" className="mt-3 w-full">
                                View Full Profile
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
