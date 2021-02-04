import PROJECTS from '../constants/actions/ProjectsActionTypes';

const initialValue = {
    active: null,
    list: []
}

const projects = (state = initialValue, action) => {
    switch (action.type) {

        // List
        case PROJECTS.LIST.SET:
            return {
                ...state,
                list: action.projects
            }

        case PROJECTS.LIST.SET_AND_ACTIVE_FIRST:
            return {
                ...state,
                active: action.projects?.length > 0 ? action.projects[0] : null,
                list: action.projects
            }

        case PROJECTS.LIST.ADD_PROJECT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.project
                ]
            }

        case PROJECTS.LIST.REMOVE_PROJECT:
            return {
                ...state,
                active: (state.active?.id === action.project.id) ? null : state.active,
                list: state.list.filter(project => project.id !== action.project?.id)
            }


        // Active
        case PROJECTS.ACTIVE.SET:
            return {
                ...state,
                active: action.active
            }

        case PROJECTS.ACTIVE.UPDATE:
            return {
                ...state,
                active: {
                    ...state.active,
                    ...action.project
                },
                list: state.list.map(project => project.id === action.project?.id ? action.project : project)
            }

        case PROJECTS.ACTIVE.FETCH:
            return {
                ...state,
                active: action.project,
                list: state.list.map(project => project.id === action.project?.id ? action.project : project)
            }


        // Chapters
        case PROJECTS.CHAPTERS.ADD:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: [
                        ...state.active.chapters,
                        action.chapter
                    ]
                }
            }

        case PROJECTS.CHAPTERS.REMOVE:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.filter(chapter => chapter.id !== action.chapterId)
                }
            }

        case PROJECTS.CHAPTERS.UPDATE:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.id === action.chapter.id
                            ? {
                                ...chapter,
                                ...action.chapter
                            }
                            : chapter
                    )
                }
            }


        // Steps
        case PROJECTS.STEPS.ADD:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.id === action.chapter.id
                            ? {
                                ...chapter,
                                steps: [
                                    ...chapter.steps,
                                    action.step
                                ]
                            }
                            : chapter
                    )
                }
            }

        case PROJECTS.STEPS.REMOVE:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.steps.filter(step => step.id !== action.stepId)
                    )
                }
            }

        case PROJECTS.STEPS.UPDATE:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.steps.map(step =>
                            step.id === action.step.id
                                ? {
                                    ...step,
                                    ...action.step
                                }
                                : step
                        )
                    )
                }
            }


        // Tasks
        case PROJECTS.TASKS.ADD:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.steps.map(step =>
                            step.id === action.step.id
                                ? {
                                    ...step,
                                    tasks: [
                                        ...step.tasks,
                                        action.task
                                    ]
                                }
                                : step
                        )
                    )
                }
            }

        case PROJECTS.TASKS.REMOVE:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.steps.map(step =>
                            step.tasks.filter(task => task.id !== action.taskId)
                        )
                    )
                }
            }

        case PROJECTS.TASKS.UPDATE:
            return {
                ...state,
                active: {
                    ...state.active,
                    chapters: state.active.chapters.map(chapter =>
                        chapter.steps.map(step =>
                            step.tasks.map(task =>
                                task.id === action.task.id
                                    ? {
                                        ...task,
                                        ...action.task
                                    }
                                    : task
                            )
                        )
                    )
                }
            }

        default:
            return state;
    }
}

export default projects;