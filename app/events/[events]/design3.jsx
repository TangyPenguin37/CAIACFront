"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import Image from "next/image"

// Simulated API call (same as before)
async function fetchEventsToDisplay(eventId) {
  // ... (same as in design1.tsx)
}

export default function IndividualEventDesign3() {
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
        <Card>
          <div className="relative h-64 sm:h-80">
            <Image
              src={eventImage.url || "/placeholder.svg"}
              alt={eventName}
              layout="fill"
              objectFit="cover" />
          </div>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4">{eventName}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-gray-500" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gray-500" />
                <span>{formattedTime}</span>
              </div>
              <div className="flex items-center">
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
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            {eventUrlLink && (
              <Button asChild className="w-full">
                <Link href={eventUrlLink} target="_blank" rel="noopener noreferrer">
                  Event Website
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>)
  );
}

