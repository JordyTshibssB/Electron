import Button from '../../atoms/button'
import ArrowLeftIcon from '../../icons/arrow-left'
import ArrowRightIcon from '../../icons/arrow-right'
import { format } from 'date-fns'
import { useState } from 'react'
import {
  CaptionProps,
  DayPickerProps,
  DayPicker as RDayPicker,
  useNavigation
} from 'react-day-picker'

// TODO: Requires a refactor, styling is too complicated
// TODO: Maybe remove state inside, must be controlled from the parent
// TODO: increase the the inner table's bottom spacing
function Caption(props: CaptionProps) {
  const { displayMonth } = props
  const { goToMonth, nextMonth, previousMonth } = useNavigation()

  const handleNextMonth = () => nextMonth && goToMonth(nextMonth)

  const handlePreviousMonth = () => previousMonth && goToMonth(previousMonth)

  return (
    <div className="flex flex-col pt-6">
      <h2 className="mb-5 flex h-fit items-center justify-center gap-4 text-neutral-700 [&_button]:h-fit [&_stroke]:stroke-neutral-700">
        <Button size="sm" variant="text" onClick={handlePreviousMonth}>
          <ArrowLeftIcon />
        </Button>

        {format(displayMonth, 'MMMM yy')}

        <Button size="sm" variant="text" onClick={handleNextMonth}>
          <ArrowRightIcon />
        </Button>
      </h2>

      <div className="h-[1px] w-full bg-neutral-200" />
    </div>
  )
}

type IDayPickerProps = DayPickerProps

function DayPicker(props: IDayPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <RDayPicker
      mode="single"
      selected={selectedDate}
      components={{ Caption }}
      // TODO: To be removed
      // @ts-expect-error Type mismatch
      onSelect={setSelectedDate}
      classNames={{
        head_row: '*:font-medium',
        table: 'm-4 [&_button]:text-md',
        root: 'bg-neutral-100 rounded-xl pb-3',
        caption: 'flex justify-between items-center',
        day: 'text-neutral-700 rounded-full size-[32px]',
        day_selected:
          'bg-gradient-to-r from-primary-gr-from to-primary-gr-to rounded-full size-[32px] !text-white'
      }}
      {...props}
    />
  )
}

export type { IDayPickerProps as IDatePickerProps }
export default DayPicker
