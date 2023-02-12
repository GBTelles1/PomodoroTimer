import { Cycle } from './reducer'

export enum ActionTypes {
  Mark_Current_Cycle_As_Finished = 'Mark_Current_Cycle_As_Finished',
  Create_New_Cycle = 'Create_New_Cycle',
  Interrupt_Current_Cycle = 'Interrupt_Current_Cycle',
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.Create_New_Cycle,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.Mark_Current_Cycle_As_Finished,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.Interrupt_Current_Cycle,
  }
}
