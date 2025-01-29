"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react";
import Image from "next/image"

// Simulated API call (same as before)
async function fetchEventsToDisplay(eventId) {
  // ... (same as in design1.tsx)
}

export default function IndividualEventDesign4() {
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
    (<div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 border-r">
        <Link
          href="/events"
          className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-gray-500 uppercase tracking-wide text-sm">Date</h2>
            <p>{formattedDate}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-500 uppercase tracking-wide text-sm">Time</h2>
            <p>{formattedTime}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-500 uppercase tracking-wide text-sm">Location</h2>
            <p>{eventLocation}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-500 uppercase tracking-wide text-sm">Organized by</h2>
            <Link
              href={`/societies/${society.documentId}`}
              className="text-blue-600 hover:underline">
              {society.username}
            </Link>
          </div>
        </div>
        {eventUrlLink && (
          <Button asChild className="w-full mt-6">
            <Link href={eventUrlLink} target="_blank" rel="noopener noreferrer">
              Event Website
            </Link>
          </Button>
        )}
      </aside>
      <main className="flex-1 p-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64 mb-6">
            <Image
              src={eventImage.url || "/placeholder.svg"}
              alt={eventName}
              layout="fill"
              objectFit="cover"
              className="rounded-lg" />
          </div>
          <h1 className="text-3xl font-bold mb-6">{eventName}</h1>
          <p className="text-gray-600">{eventDescription}</p>
        </div>
      </main>
    </div>)
  );
}

