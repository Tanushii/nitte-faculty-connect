
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { LogOut, Users, FileText, Building, TrendingUp, Search, Mail, Phone, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'faculty' | 'hod'>('faculty');
  
  const [overallStats] = useState({
    totalFaculties: 145,
    totalUploads: 1247,
    activeFaculties: 89,
    totalDepartments: 8
  });

  const [departmentStats] = useState([
    { name: "Computer Science", faculties: 25, uploads: 342, pending: 12, hod: "Dr. Rajesh Kumar" },
    { name: "Electronics", faculties: 18, uploads: 287, pending: 8, hod: "Prof. Sunita Sharma" },
    { name: "Mechanical", faculties: 22, uploads: 195, pending: 5, hod: "Dr. Vikram Singh" },
    { name: "Civil", faculties: 20, uploads: 156, pending: 7, hod: "Prof. Priya Nair" },
    { name: "Electrical", faculties: 16, uploads: 134, pending: 4, hod: "Dr. Arjun Reddy" },
    { name: "Information Science", faculties: 24, uploads: 98, pending: 9, hod: "Prof. Kavya Rao" },
    { name: "Biotechnology", faculties: 12, uploads: 23, pending: 2, hod: "Dr. Meera Joshi" },
    { name: "MBA", faculties: 8, uploads: 12, pending: 1, hod: "Prof. Ravi Gupta" }
  ]);

  const [hodList] = useState([
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      department: "Computer Science",
      email: "rajesh.kumar@nmit.ac.in",
      phone: "+91 9876543201",
      avatar: "/api/placeholder/60/60",
      facultiesUnder: 25,
      totalApprovals: 342,
      pendingApprovals: 12
    },
    {
      id: 2,
      name: "Prof. Sunita Sharma",
      department: "Electronics",
      email: "sunita.sharma@nmit.ac.in",
      phone: "+91 9876543202",
      avatar: "/api/placeholder/60/60",
      facultiesUnder: 18,
      totalApprovals: 287,
      pendingApprovals: 8
    },
    {
      id: 3,
      name: "Dr. Vikram Singh",
      department: "Mechanical",
      email: "vikram.singh@nmit.ac.in",
      phone: "+91 9876543203",
      avatar: "/api/placeholder/60/60",
      facultiesUnder: 22,
      totalApprovals: 195,
      pendingApprovals: 5
    }
  ]);

  const [allFaculties] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Professor",
      department: "Computer Science",
      email: "sarah.johnson@nmit.ac.in",
      phone: "+91 9876543210",
      avatar: "/api/placeholder/60/60",
      uploads: 15,
      lastActive: "2024-01-20",
      hod: "Dr. Rajesh Kumar"
    },
    {
      id: 2,
      name: "Prof. Mike Chen",
      position: "Associate Professor",
      department: "Electronics", 
      email: "mike.chen@nmit.ac.in",
      phone: "+91 9876543211",
      avatar: "/api/placeholder/60/60",
      uploads: 12,
      lastActive: "2024-01-19",
      hod: "Prof. Sunita Sharma"
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
      lastActive: "2024-01-18",
      hod: "Dr. Rajesh Kumar"
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const filteredHODs = hodList.filter(hod =>
    hod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hod.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaculties = allFaculties.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">University-wide Management Portal</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Faculties</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalFaculties}</div>
              <p className="text-xs text-muted-foreground">Across all departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Faculties</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{overallStats.activeFaculties}</div>
              <p className="text-xs text-muted-foreground">Currently posting content</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Uploads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalUploads}</div>
              <p className="text-xs text-muted-foreground">Click to view timeline</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalDepartments}</div>
              <p className="text-xs text-muted-foreground">Active departments</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="department-wise" className="space-y-6">
          <TabsList>
            <TabsTrigger value="department-wise">Department-wise Analytics</TabsTrigger>
            <TabsTrigger value="timeline">Timeline View</TabsTrigger>
            <TabsTrigger value="hod-search">HOD Management</TabsTrigger>
            <TabsTrigger value="faculty-search">Faculty Search</TabsTrigger>
            <TabsTrigger value="approvals">Final Approvals</TabsTrigger>
          </TabsList>

          <TabsContent value="department-wise">
            <Card>
              <CardHeader>
                <CardTitle>Department-wise Statistics</CardTitle>
                <CardDescription>Overview of faculty activity and submissions by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departmentStats.map((dept) => (
                    <Card key={dept.name} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{dept.name}</CardTitle>
                        <p className="text-sm text-blue-600">HOD: {dept.hod}</p>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Faculties:</span>
                          <span className="font-medium">{dept.faculties}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Total Uploads:</span>
                          <span className="font-medium">{dept.uploads}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Pending:</span>
                          <span className="font-medium text-orange-600">{dept.pending}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle>Upload Timeline</CardTitle>
                <CardDescription>Chronological view of all submissions (most recent first)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Timeline view will display all uploads across departments with timestamps
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hod-search">
            <Card>
              <CardHeader>
                <CardTitle>HOD Management</CardTitle>
                <CardDescription>Search and manage Head of Departments across all branches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search HODs by name or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* HOD Results */}
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    HODs ({filteredHODs.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredHODs.map((hod) => (
                      <Card key={hod.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={hod.avatar} />
                              <AvatarFallback>{hod.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{hod.name}</h4>
                              <p className="text-blue-600 font-medium">Head of Department</p>
                              <p className="text-sm text-gray-600 mb-2">{hod.department}</p>
                              
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Mail className="h-4 w-4" />
                                  <span>{hod.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" />
                                  <span>{hod.phone}</span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                                <div className="text-center">
                                  <div className="font-medium">{hod.facultiesUnder}</div>
                                  <div className="text-gray-500">Faculties</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-medium">{hod.totalApprovals}</div>
                                  <div className="text-gray-500">Approved</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-medium text-orange-600">{hod.pendingApprovals}</div>
                                  <div className="text-gray-500">Pending</div>
                                </div>
                              </div>
                              
                              <Button variant="outline" size="sm" className="mt-3 w-full">
                                <Eye className="h-4 w-4 mr-2" />
                                View Department
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

          <TabsContent value="faculty-search">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Search</CardTitle>
                <CardDescription>Search and view all faculty members across departments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search faculty by name, department, or position..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Faculty Results */}
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Faculty Members ({filteredFaculties.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredFaculties.map((faculty) => (
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
                              <p className="text-sm text-gray-600">{faculty.department}</p>
                              <p className="text-xs text-gray-500 mb-2">Under HOD: {faculty.hod}</p>
                              
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
                                <Eye className="h-4 w-4 mr-2" />
                                View Profile
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

          <TabsContent value="approvals">
            <Card>
              <CardHeader>
                <CardTitle>Final Admin Approvals</CardTitle>
                <CardDescription>Items that have been approved by HODs and await final admin approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Final approval queue will be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
