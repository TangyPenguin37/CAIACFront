"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import Image from "next/image"

// Simulated API call (same as before)
async function fetchEventsToDisplay(eventId) {
  // ... (same as in design1.tsx)
}

export default function IndividualEventDesign2() {
  // ... (same useState, useEffect, and conditional rendering as in design1.tsx)

  const { eventName, eventDate, eventTime, eventLocation, eventDescription, eventImage, eventUrlLink, society } =
    selectedEvent

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const formattedTime = new Date(`2000-01-01T${eventTime}`).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    (<div className="flex flex-col min-h-screen">
      <div className="relative h-96">
        <Image
          src={eventImage.url || "/placeholder.svg"}
          alt={eventName}
          layout="fill"
          objectFit="cover" />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">{eventName}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/events"
          className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex items-center mr-4 mb-2">
            <Calendar className="mr-2 h-5 w-5 text-gray-500" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <Clock className="mr-2 h-5 w-5 text-gray-500" />
            <span>{formattedTime}</span>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="mr-2 h-5 w-5 text-gray-500" />
            <span>{eventLocation}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{eventDescription}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Organized by:</h2>
          <Link
            href={`/societies/${society.documentId}`}
            className="text-blue-600 hover:underline">
            {society.username}
          </Link>
        </div>
        {eventUrlLink && (
          <Button asChild className="w-full">
            <Link href={eventUrlLink} target="_blank" rel="noopener noreferrer">
              Event Website
            </Link>
          </Button>
        )}
      </div>
    </div>)
  );
}

