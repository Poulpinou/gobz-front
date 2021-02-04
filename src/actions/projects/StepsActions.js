import {STEPS} from "../../constants/actions/ProjectsActionTypes";

export const addStep = (chapter, step) => ({
    type: STEPS.ADD,
    chapter,
    step
})

export const removeStep = (stepId) => ({
    type: STEPS.REMOVE,
    stepId
})

export const updateStep = (step) => ({
    type: STEPS.UPDATE,
    step
})
