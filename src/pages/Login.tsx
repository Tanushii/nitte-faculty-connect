
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Login = () => {
  const [role, setRole] = useState<string>('');
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role && credentials.id && credentials.password) {
      // Store user info in localStorage for demo purposes
      localStorage.setItem('userRole', role);
      localStorage.setItem('userId', credentials.id);
      
      // Navigate based on role
      switch (role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'hod':
          navigate('/hod-dashboard');
          break;
        case 'faculty':
          navigate('/faculty-dashboard');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* University Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Nitte (Deemed to be University)
          </h1>
          <p className="text-lg text-gray-600">
            NMIT - Bangalore Campus
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Faculty Portal</CardTitle>
            <CardDescription>Please select your role and login</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Login As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="hod">HOD (Head of Department)</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="id">Employee ID</Label>
                  <Input
                    id="id"
                    type="text"
                    placeholder="Enter your Employee ID"
                    value={credentials.id}
                    onChange={(e) => setCredentials(prev => ({ ...prev, id: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500">
          © 2024 Nitte (Deemed to be University) - NMIT Bangalore
        </div>
      </div>
    </div>
  );
};

export default Login;
