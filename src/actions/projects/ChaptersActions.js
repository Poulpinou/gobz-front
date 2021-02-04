import {CHAPTERS} from "../../constants/actions/ProjectsActionTypes";

export const addChapter = (chapter) => ({
    type: CHAPTERS.ADD,
    chapter
})

export const removeChapter = (chapterId) => ({
    type: CHAPTERS.REMOVE,
    chapterId
})

export const updateChapter = (chapter) => ({
    type: CHAPTERS.UPDATE,
    chapter
})