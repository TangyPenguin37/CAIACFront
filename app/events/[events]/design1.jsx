"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import Image from "next/image"

// Simulated API call (same as before)
async function fetchEventsToDisplay(eventId) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const sampleEvent = {
    documentId: "sample-event-001",
    eventName: "Annual Cambridge Poetry Festival",
    eventDate: "2024-06-15",
    eventTime: "19:00:00.000",
    eventLocation: "Cambridge University, Great Hall",
    eventDescription:
      "Join us for the Annual Cambridge Poetry Festival, a celebration of verse and creativity. This year's festival features readings from renowned poets, interactive workshops, and an open mic session for emerging voices. From sonnets to free verse, experience the power and beauty of poetry in the historic setting of Cambridge University.",
    eventImage: {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    eventUrlLink: "https://example.com/cambridge-poetry-festival",
    society: {
      documentId: "lit-society-001",
      username: "Cambridge Literary Society",
    },
  }

  return eventId === sampleEvent.documentId ? sampleEvent : null
}

export default function IndividualEventDesign1() {
  const params = useParams()
  const eventId = params.events
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getEvent = async () => {
      try {
        const event = await fetchEventsToDisplay(eventId)
        if (event) {
          setSelectedEvent(event)
        } else {
          setError("Event not found")
        }
      } catch (err) {
        setError("Failed to fetch event data")
      } finally {
        setIsLoading(false)
      }
    }

    getEvent()
  }, [eventId])

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  if (!selectedEvent) return <div className="flex justify-center items-center h-screen">Event not found</div>;

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
    (<div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 relative">
        <Image
          src={eventImage.url || "/placeholder.svg"}
          alt={eventName}
          layout="fill"
          objectFit="cover" />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <Link
            href="/events"
            className="inline-flex items-center text-blue-600 hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
          <h1 className="text-4xl font-bold mb-6">{eventName}</h1>
          <div className="flex flex-col space-y-2 mb-6">
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

