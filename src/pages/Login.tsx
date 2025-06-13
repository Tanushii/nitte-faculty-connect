
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
      className="min-h-screen flex items-center justify-center p-4 relative animate-fade-in"
      style={{
        backgroundImage: `url('/lovable-uploads/93a5b02f-4504-4b78-b669-1ed7226e6af3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced overlay with gradient for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* University Header with Enhanced Styling */}
        <div className="text-center mb-8 animate-scale-in">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/96e3db18-b61c-493b-ba28-56f6e4245dfa.png" 
                alt="Nitte Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/75c5322e-ba6b-461a-b417-21a9752bbed6.png" 
              alt="NMIT Logo" 
              className="h-14 w-auto mx-auto"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-2xl tracking-wide">
              Faculty Portal
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg font-medium">
              Academic Excellence Management System
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Enhanced Login Card */}
        <Card className="shadow-2xl bg-white/95 backdrop-blur-md border-0 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600 text-base">Please select your role and login to continue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Enhanced Role Selection */}
              <div className="space-y-3">
                <Label htmlFor="role" className="text-gray-800 font-semibold text-base">Login As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 hover:border-blue-300 transition-colors rounded-lg bg-white/80 backdrop-blur-sm">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md">
                    <SelectItem value="admin" className="hover:bg-blue-50">Admin</SelectItem>
                    <SelectItem value="hod" className="hover:bg-blue-50">HOD (Head of Department)</SelectItem>
                    <SelectItem value="faculty" className="hover:bg-blue-50">Faculty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Enhanced Credentials Section */}
              <div className="space-y-5">
                <div className="space-y-3">
                  <Label htmlFor="id" className="text-gray-800 font-semibold text-base">Employee ID</Label>
                  <Input
                    id="id"
                    type="text"
                    placeholder="Enter your Employee ID"
                    value={credentials.id}
                    onChange={(e) => setCredentials(prev => ({ ...prev, id: e.target.value }))}
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 hover:border-blue-300 transition-colors rounded-lg bg-white/80 backdrop-blur-sm text-base"
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="password" className="text-gray-800 font-semibold text-base">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="h-12 border-2 border-gray-200 focus:border-blue-500 hover:border-blue-300 transition-colors rounded-lg bg-white/80 backdrop-blur-sm text-base"
                    required
                  />
                </div>
              </div>

              {/* Enhanced Login Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
              >
                Login to Portal
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center mt-8 text-sm text-white/90 drop-shadow-lg bg-black/30 backdrop-blur-sm rounded-xl py-3 px-6 hover:bg-black/40 transition-colors duration-300">
          <p className="font-medium">© 2024 Nitte (Deemed to be University) - NMIT Bangalore</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
