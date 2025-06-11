"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { courses } from "@/constant";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  coaching: z.string().min(3, { message: "Select atleast one option." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type InquireFormProps = {
  selectedCoaching?: string;

};

export default function ContactForm({ selectedCoaching }: InquireFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      coaching: selectedCoaching || "",
      message: "",
    },
  });
  useEffect(() => {
    if (selectedCoaching) {
      form.setValue("coaching", selectedCoaching);
    }
  }, [selectedCoaching, form]);

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    // Add API integration or toast here
  };

  return (
    <section className="bg-white shadow-md rounded-xl p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-600">
        Send us a message
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="coaching"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="h-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-tech-blue focus:border-tech-blue w-full">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent className="bg-white w-full">
                  {courses.map((course) => (
                    <SelectItem key={course.title} value={course.title}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message here..." rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
