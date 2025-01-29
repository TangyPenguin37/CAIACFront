"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowLeft, User } from "lucide-react"
import Image from "next/image"

// Simulated API call (same as before)
async function fetchEventsToDisplay(eventId) {
  // ... (same as in design1.tsx)
}

export default function IndividualEventDesign5() {
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
    (<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/events"
          className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <Image
              src={eventImage.url || "/placeholder.svg"}
              alt={eventName}
              layout="fill"
              objectFit="cover" />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center px-4">{eventName}</h1>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h2 className="text-sm font-semibold text-gray-500">Date</h2>
                  <p className="text-lg">{formattedDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h2 className="text-sm font-semibold text-gray-500">Time</h2>
                  <p className="text-lg">{formattedTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h2 className="text-sm font-semibold text-gray-500">Location</h2>
                  <p className="text-lg">{eventLocation}</p>
                </div>
              </div>
              <div className="flex items-center">
                <User className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h2 className="text-sm font-semibold text-gray-500">Organized by</h2>
                  <Link
                    href={`/societies/${society.documentId}`}
                    className="text-lg text-blue-600 hover:underline">
                    {society.username}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Event Description</h2>
              <p className="text-gray-600">{eventDescription}</p>
            </div>
            {eventUrlLink && (
              <Button asChild className="w-full mt-8">
                <Link href={eventUrlLink} target="_blank" rel="noopener noreferrer">
                  Event Website
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>)
  );
}

