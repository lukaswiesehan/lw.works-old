import {Heading} from '@components/atoms/heading'
import {BookingForm} from '@components/calendar/booking-form'
import {Section} from '@components/layout/section'
import {getSharedCalendar} from '@utils/amie/get-shared-calendar'
import {getSlotsByWeek} from '@utils/amie/get-slots-by-week'
import {notFound} from 'next/navigation'
import {useState} from 'react'

export default async function BookingPage({params}: {params: {slug: string}}) {
  const {sharedCalendar} = await getSharedCalendar(params.slug)
  if (!sharedCalendar) notFound()
  const weeks = getSlotsByWeek(sharedCalendar)

  return (
    <main>
      <Section className="pt-32 pb-20 sm:pb-28 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 xl:pb-48">
        <p className="mb-1 flex items-center space-x-4 font-mono uppercase text-indigo-500 dark:text-indigo-400 sm:mb-3">
          <span>Call vereinbaren</span>
          <span className="text-black/20 dark:text-white/20">{'///'}</span>
        </p>
        <Heading level={1} className="mb-16">
          {sharedCalendar.title}
        </Heading>
        <BookingForm weeks={weeks} data-superjson />
      </Section>
    </main>
  )
}
