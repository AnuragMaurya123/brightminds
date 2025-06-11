"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
type PopupFormProps = {
  selectedCoaching?: string;
  className?:string
  label:string
};
export default function PopupForm({ selectedCoaching,className,label }: PopupFormProps) {
  
  return (
    <Dialog>
      <DialogTrigger className={className}>
       {label}
      </DialogTrigger>

      <DialogContent className="bg-white max-w-3xl">
        <DialogHeader>
          <DialogTitle>Join Upcoming Classes</DialogTitle>
          <DialogDescription>
          Fill out the form below to get started with your learning journey.
          </DialogDescription>
        </DialogHeader>
        <ContactForm selectedCoaching={selectedCoaching}/>
      </DialogContent>
    </Dialog>
  );
}
