'use client'
import sampleEventsData from "@/app/components/sampleEventsData"
import { useParams } from "next/navigation";
//import Link from "next/link";
import sampleSocietiesData from "@/app/components/sampleSocietiesData";
import { sampleEventsData2 } from "@/app/components/sampleEventsData";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowLeft, User } from "lucide-react"
import Image from "next/image";
import fetchEventsToDisplay from "@/app/apiFunctions/fetchEventsToDisplay";
import Link from "next/link";



export default function individualEvent() {

    const { events } = useParams();
    console.log("this is the documentId:", events);
    //console.log("sampleSocietiesData borrowed here:", sampleSocietiesData);
    //const sampleSocietiesDataMap = sampleEventsData[0];
    //console.log("sampleSocietiesDataMap borrowed here:", sampleSocietiesDataMap);

  
    //i want to see how this compared

    const [ eventsToFilterFrom, setEventsToFilterFrom ] = useState([]); 

    useEffect(() => {
        
        const getEvents = async () => {
            const eventsToReturn = await fetchEventsToDisplay();
            console.log("Fetched events to display:", eventsToFilterFrom);
            setEventsToFilterFrom(eventsToReturn);
        };

        getEvents();

    },[])

    useEffect(() => {
        console.log("these are the events that have been fetched, for displaying:", eventsToFilterFrom);
     }, [eventsToFilterFrom]); // This will log each time eventsToShow changes



    const selectedEventArray = sampleEventsData2.filter(event => event.documentId === events);
    console.log("This is the selected Event:", selectedEventArray);

    const selectedEventArray2 = eventsToFilterFrom.filter(event => event.documentId === events);
    console.log("This is the genuine selected Event:", selectedEventArray2);

    const selectedEvent = selectedEventArray[0];
    console.log("here is the specific selected event:", selectedEvent);

    const selectedEvent2 = selectedEventArray2[0];
    console.log("here is the specific selected event:", selectedEvent2);

    const selectedEventUrlLink = selectedEvent?.eventUrlLink || 'https://localhost:3001'; //just the current home
    //obviousy change taht so if there's no eventUrlLink, then the button doesn't appear

    //need to add link, to send you to society page, and add ability to display society icon below

    return (
      <div className="flex flex-col min-h-screen">
        <div className="relative h-96">
          <Image src={`http://localhost:1337${selectedEvent?.eventImage?.url || "/eton.jpeg"}`} alt={selectedEvent2?.eventName} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center px-4">{selectedEvent2?.eventName}</h1>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link href="/events" className="inline-flex items-center text-blue-600 hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex items-center mr-4 mb-2">
              <Calendar className="mr-2 h-5 w-5 text-gray-500" />
              <span>{selectedEvent2?.eventDate}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Clock className="mr-2 h-5 w-5 text-gray-500" />
              <span>{selectedEvent2?.eventTime}</span>
            </div>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-5 w-5 text-gray-500" />
              <span>{selectedEvent2?.eventLocation}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{selectedEvent2?.eventDescription}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Organized by:</h2>
            <Link href={`/societies/${selectedEvent2?.society?.documentId}`} className="text-blue-600 hover:underline">
              {selectedEvent2?.society?.username}
            </Link>
          </div>
          {selectedEvent2?.eventUrlLink && (
            <Button asChild className="w-full">
              <Link href={selectedEvent2?.eventUrlLink} target="_blank" rel="noopener noreferrer">
                Event Website
              </Link>
            </Button>
          )}
        </div>
      </div>
    )
}