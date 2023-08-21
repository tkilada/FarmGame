import React from 'react'
import { useSelector } from 'react-redux'
import { SelectTurnPoints} from '../../../StoreFolder/Reducers/Months'

function TurnPoints() {
  const CurrentTurnPoints = useSelector(SelectTurnPoints)

  return (
    <div className='ActionPoints'>
      ActionPoints:{CurrentTurnPoints}
    </div>

  )
}

export default TurnPoints