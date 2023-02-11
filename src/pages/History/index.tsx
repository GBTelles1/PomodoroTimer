import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  isActive: boolean
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function History() {
  const { cycles } = useContext(CyclesContext)

  function cycleStatus(cycle: Cycle) {
    if (cycle.finishedDate) {
      return 'Finished'
    } else if (cycle.interruptedDate) {
      return 'Interrupted'
    } else {
      return 'Progress'
    }
  }

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              const publishedDateRelativeToNow = formatDistanceToNow(
                cycle.startDate,
                {
                  addSuffix: true,
                },
              )
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>{publishedDateRelativeToNow}</td>
                  <td>
                    <Status statusColor={cycleStatus(cycle)}>
                      {cycleStatus(cycle)}
                    </Status>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
