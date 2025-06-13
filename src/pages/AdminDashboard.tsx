import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LogOut, Users, FileText, Building, TrendingUp, Search, Mail, Phone, Eye, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
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

  const [timelineData] = useState([
    {
      id: 1,
      faculty: "Dr. Sarah Johnson",
      department: "Computer Science",
      title: "Research Paper on AI Ethics",
      type: "Publication",
      uploadDate: "2024-01-20",
      uploadTime: "10:30 AM",
      hodApproval: "Approved",
      hodApprovalDate: "2024-01-21",
      adminStatus: "Pending",
      priority: "High"
    },
    {
      id: 2,
      faculty: "Prof. Mike Chen",
      department: "Electronics",
      title: "Conference Presentation - IoT Applications",
      type: "Conference",
      uploadDate: "2024-01-19",
      uploadTime: "2:15 PM",
      hodApproval: "Approved",
      hodApprovalDate: "2024-01-20",
      adminStatus: "Approved",
      adminApprovalDate: "2024-01-21",
      priority: "Medium"
    },
    {
      id: 3,
      faculty: "Dr. Emily Davis",
      department: "Computer Science",
      title: "Workshop on Machine Learning",
      type: "Workshop",
      uploadDate: "2024-01-18",
      uploadTime: "4:45 PM",
      hodApproval: "Pending",
      hodApprovalDate: null,
      adminStatus: "Waiting for HOD",
      priority: "Low"
    },
    {
      id: 4,
      faculty: "Prof. Rajesh Kumar",
      department: "Mechanical",
      title: "Patent Application - New Engine Design",
      type: "Patent",
      uploadDate: "2024-01-17",
      uploadTime: "11:20 AM",
      hodApproval: "Approved",
      hodApprovalDate: "2024-01-18",
      adminStatus: "Under Review",
      priority: "High"
    }
  ]);

  const [finalApprovals] = useState([
    {
      id: 1,
      faculty: "Dr. Sarah Johnson",
      department: "Computer Science",
      hod: "Dr. Rajesh Kumar",
      title: "Research Paper on AI Ethics",
      type: "Publication",
      submissionDate: "2024-01-20",
      hodApprovalDate: "2024-01-21",
      urgency: "High",
      description: "Comprehensive research on ethical implications of AI in healthcare systems",
      documents: ["research_paper.pdf", "ethics_review.pdf", "peer_reviews.pdf"],
      status: "Awaiting Final Approval"
    },
    {
      id: 2,
      faculty: "Prof. Rajesh Kumar",
      department: "Mechanical",
      hod: "Dr. Vikram Singh",
      title: "Patent Application - New Engine Design",
      type: "Patent",
      submissionDate: "2024-01-17",
      hodApprovalDate: "2024-01-18",
      urgency: "High",
      description: "Revolutionary engine design with 40% improved fuel efficiency",
      documents: ["patent_application.pdf", "technical_drawings.pdf", "prototype_data.pdf"],
      status: "Under Final Review"
    },
    {
      id: 3,
      faculty: "Dr. Priya Sharma",
      department: "Biotechnology",
      hod: "Dr. Meera Joshi",
      title: "Clinical Trial Results - New Drug Compound",
      type: "Research",
      submissionDate: "2024-01-15",
      hodApprovalDate: "2024-01-16",
      urgency: "Critical",
      description: "Phase 2 clinical trial results for novel cancer treatment compound",
      documents: ["clinical_data.pdf", "statistical_analysis.pdf", "safety_report.pdf"],
      status: "Awaiting Final Approval"
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Critical': return 'text-red-800 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Pending': case 'Under Review': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Rejected': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

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
                <CardDescription>Chronological view of all submissions across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timelineData.map((item) => (
                    <Card key={item.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-lg">{item.title}</h4>
                              <Badge variant="outline" className={getPriorityColor(item.priority)}>
                                {item.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              By <span className="font-medium">{item.faculty}</span> • {item.department}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>📅 {item.uploadDate} at {item.uploadTime}</span>
                              <span>📁 {item.type}</span>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(item.hodApproval)}
                              <span className="text-sm">HOD: {item.hodApproval}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(item.adminStatus)}
                              <span className="text-sm">Admin: {item.adminStatus}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t flex justify-between items-center">
                          <div className="text-xs text-gray-500">
                            {item.hodApprovalDate && `HOD approved on ${item.hodApprovalDate}`}
                            {item.adminApprovalDate && ` • Admin approved on ${item.adminApprovalDate}`}
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                <CardDescription>Items approved by HODs awaiting final admin approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {finalApprovals.map((item) => (
                    <Card key={item.id} className="border-2 border-orange-200 bg-orange-50">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">{item.title}</h3>
                              <Badge variant="outline" className={getPriorityColor(item.urgency)}>
                                {item.urgency} Priority
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Faculty:</span> {item.faculty}
                              </div>
                              <div>
                                <span className="font-medium">Department:</span> {item.department}
                              </div>
                              <div>
                                <span className="font-medium">HOD:</span> {item.hod}
                              </div>
                              <div>
                                <span className="font-medium">Type:</span> {item.type}
                              </div>
                              <div>
                                <span className="font-medium">Submitted:</span> {item.submissionDate}
                              </div>
                              <div>
                                <span className="font-medium">HOD Approved:</span> {item.hodApprovalDate}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                            <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                            <Button variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              Review
                            </Button>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <h4 className="font-medium mb-2">Attached Documents:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.documents.map((doc, index) => (
                              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                                📄 {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-800">Status: {item.status}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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

export default AdminDashboard;
