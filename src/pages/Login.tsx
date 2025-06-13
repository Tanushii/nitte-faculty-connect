
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
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/93a5b02f-4504-4b78-b669-1ed7226e6af3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* University Header with Logos */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/96e3db18-b61c-493b-ba28-56f6e4245dfa.png" 
              alt="Nitte Logo" 
              className="h-16 w-auto"
            />
          </div>
          <div className="bg-white bg-opacity-95 rounded-lg p-4 mb-4">
            <img 
              src="/lovable-uploads/75c5322e-ba6b-461a-b417-21a9752bbed6.png" 
              alt="NMIT Logo" 
              className="h-12 w-auto mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            Faculty Portal
          </h1>
          <p className="text-lg text-white drop-shadow-lg">
            Academic Excellence Management System
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4"></div>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl bg-white bg-opacity-95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">Please select your role and login to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-700 font-medium">Login As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500">
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
                  <Label htmlFor="id" className="text-gray-700 font-medium">Employee ID</Label>
                  <Input
                    id="id"
                    type="text"
                    placeholder="Enter your Employee ID"
                    value={credentials.id}
                    onChange={(e) => setCredentials(prev => ({ ...prev, id: e.target.value }))}
                    className="border-gray-300 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="border-gray-300 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                Login to Portal
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-white drop-shadow-lg bg-black bg-opacity-30 rounded-lg py-2">
          © 2024 Nitte (Deemed to be University) - NMIT Bangalore
        </div>
      </div>
    </div>
  );
};

export default Login;
