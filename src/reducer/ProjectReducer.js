import * as types from '../constant/type/action/ProjectActionTypes';

// TODO: remove placeholder
const initialValue = {
    active: {
        id: 2
    },
    list: [
        {
            id: 1,
            name: "Projet #1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat, nisi vitae bibendum elementum, ipsum est elementum lacus, a interdum magna enim vitae mi. Maecenas lorem turpis, suscipit tincidunt tortor et, cursus elementum justo. Proin tincidunt, nibh eget hendrerit commodo, orci dui scelerisque nisi, a hendrerit nunc erat id orci. Maecenas egestas lorem non tortor porta, non facilisis mauris porta. Proin rhoncus urna nec velit ornare, vel accumsan dolor malesuada. Morbi sit amet congue ante. Duis pulvinar aliquam mi faucibus sagittis. Sed nisi ipsum, venenatis nec feugiat eget, posuere ut ipsum. Nullam non interdum libero."
        },
        {
            id: 2,
            name: "Projet #2",
            description: "Praesent et posuere sem. Proin viverra, ex eu imperdiet accumsan, purus lectus sagittis turpis, eget semper libero dolor ac metus. Praesent eget finibus odio, eget maximus sem. Nulla dictum leo metus, non tristique ipsum convallis vitae. Integer malesuada nisi at viverra cursus. Mauris varius tempor neque, vitae venenatis elit congue quis. Morbi vel ornare odio. Nam commodo, lectus quis pharetra vulputate, enim justo accumsan dui, non porta nibh lectus id quam. Pellentesque vehicula velit nunc, vel rutrum erat molestie nec. Nunc scelerisque suscipit arcu, eu dapibus orci mattis at. Maecenas eget rhoncus dui. Duis lorem sapien, viverra id metus vitae, ornare vestibulum lacus. Quisque et pellentesque nunc."
        },
        {
            id: 3,
            name: "Projet #3",
            description: "Proin quis odio a enim mollis accumsan. Donec tristique, nulla nec blandit pretium, leo sem faucibus justo, et consequat ex mi vitae est. Integer aliquam, neque nec condimentum vulputate, urna elit molestie nisl, convallis hendrerit nibh velit in lectus. Mauris nec urna ac velit condimentum interdum. Mauris bibendum ultrices eros nec pretium. Aenean quis ligula at libero blandit iaculis. Maecenas vel gravida augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent mattis blandit est, vitae tincidunt ex. Donec tincidunt tellus a diam iaculis, eget euismod est consectetur. Aliquam pharetra pellentesque gravida."
        }
    ]
}

const projects = (state = initialValue, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_PROJECT:
            return {
                ...state,
                active: action.active
            }
    
        default:
            return state;
    }
}

export default projects;