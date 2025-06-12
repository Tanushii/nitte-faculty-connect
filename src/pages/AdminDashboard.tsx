
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Users, FileText, Building, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [overallStats] = useState({
    totalFaculties: 145,
    totalUploads: 1247,
    activeFaculties: 89,
    totalDepartments: 8
  });

  const [departmentStats] = useState([
    { name: "Computer Science", faculties: 25, uploads: 342, pending: 12 },
    { name: "Electronics", faculties: 18, uploads: 287, pending: 8 },
    { name: "Mechanical", faculties: 22, uploads: 195, pending: 5 },
    { name: "Civil", faculties: 20, uploads: 156, pending: 7 },
    { name: "Electrical", faculties: 16, uploads: 134, pending: 4 },
    { name: "Information Science", faculties: 24, uploads: 98, pending: 9 },
    { name: "Biotechnology", faculties: 12, uploads: 23, pending: 2 },
    { name: "MBA", faculties: 8, uploads: 12, pending: 1 }
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
            <TabsTrigger value="hod-performance">HOD Performance</TabsTrigger>
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

          <TabsContent value="hod-performance">
            <Card>
              <CardHeader>
                <CardTitle>HOD Performance Dashboard</CardTitle>
                <CardDescription>Track HOD approval rates and response times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  HOD performance metrics and approval statistics will be displayed here
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
