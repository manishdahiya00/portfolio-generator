import { BarChart, Lock, Grid, FileText, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const features = [
  {
    title: "Free Templates",
    description:
      "Access a variety of free templates to quickly get your portfolio up and running.",
    icon: <Grid className="h-8 w-8 text-white" />,
    bgColor: "bg-blue-600",
  },
  {
    title: "Premium Templates",
    description:
      "Unlock premium templates with advanced features and unique designs to make your portfolio stand out.",
    icon: <Lock className="h-8 w-8 text-white" />,
    bgColor: "bg-purple-600",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track the performance of your portfolio with real-time analytics, such as visits and engagement data.",
    icon: <BarChart className="h-8 w-8 text-white" />,
    bgColor: "bg-green-600",
  },
  {
    title: "Multiple Template Options",
    description:
      "Choose from a wide range of templates for different purposes: personal, professional, or creative portfolios.",
    icon: <Grid className="h-8 w-8 text-white" />,
    bgColor: "bg-yellow-600",
  },
  {
    title: "User Profiles",
    description:
      "Create and manage detailed user profiles, showcasing your skills, work experience, and projects.",
    icon: <Users className="h-8 w-8 text-white" />,
    bgColor: "bg-teal-600",
  },
  {
    title: "Customizable Fields",
    description:
      "Easily customize fields and sections to fit your needs, allowing you to highlight what matters most.",
    icon: <FileText className="h-8 w-8 text-white" />,
    bgColor: "bg-red-600",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="w-full text-foreground py-10 overflow-x-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto container px-5 lg:px-8 overflow-x-hidden">
        <div className="mx-auto max-w-2xl lg:text-center text-black dark:text-white">
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-center">
            Build Your Professional Portfolio
          </h2>
          <p className="mt-6 text-lg opacity-80 max-w-3xl mx-auto text-center">
            With Portfolio Generator, create stunning portfolios using free or
            premium templates. Track your performance and choose the perfect
            layout to showcase your work.
          </p>
        </div>
        <div className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24">
          <div className="grid container grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-shadow bg-white dark:bg-gray-800"
              >
                <CardHeader className="flex items-center justify-center mb-4">
                  <div
                    className={`h-12 w-12 flex items-center justify-center rounded-full ${feature.bgColor} group-hover:bg-opacity-80 transition-colors`}
                  >
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-base text-gray-800 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
