"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  FileText,
  ImageIcon,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Users,
  Video,
} from "lucide-react";

// Mock user data for demonstration
const userData = {
  name: "Shreyas Sharma",
  email: "shreyas@example.com",
  role: "Content Creator",
  joinedDate: "January 2023",
  subscribers: 256,
  posts: 48,
  revenue: "₹45,230",
};

export default function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would clear the session/token here
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-md p-1.5">
            <img
    src="/placeholder-logo.svg" // or use a public URL
    alt="Logo"
    className="w-8 h-8 object-contain" // you can adjust size here
  />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Memberly
            </span>
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Posts
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Images
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <Video className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Videos
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Subscribers
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Comments
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Logout
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold">
                  {userData.name.charAt(0)}
                </div>
                <span className="hidden text-sm font-medium md:inline-block">
                  {userData.name}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">
              Welcome back, {userData.name.split(" ")[0]}!
            </h1>
            <p className="text-muted-foreground">
              Manage your content and engage with your audience
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Subscribers
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userData.subscribers}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Posts
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userData.posts}</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userData.revenue}</div>
                <p className="text-xs text-muted-foreground">
                  +23% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Overview</CardTitle>
                    <CardDescription>
                      View and manage your creator profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 flex items-center justify-center text-white text-4xl font-bold">
                        {userData.name.charAt(0)}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">{userData.name}</h3>
                        <p className="text-muted-foreground">{userData.role}</p>
                        <p className="text-sm text-muted-foreground">
                          Member since {userData.joinedDate}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 text-sm font-medium">About</h4>
                        <p className="text-sm text-muted-foreground">
                          Professional content creator specializing in fitness
                          and wellness content. Passionate about helping others
                          achieve their health goals.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-medium">
                          Contact Information
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          <p>Email: {userData.email}</p>
                          <p>Website: shreya.sharma@website.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>
                      View detailed analytics about your content and audience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Analytics dashboard content would appear here, showing
                      graphs and metrics about subscriber growth, content
                      performance, and revenue.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>
                      Manage your posts, images, and videos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Content management interface would appear here, allowing
                      you to create, edit, and organize your content.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences and settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Account settings interface would appear here, allowing you
                      to update your profile, notification preferences, and
                      payment information.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
