# React Portals demo
## src folder

Here we have some files that will help us to understand how the portal works:

1.- _Parent_ component: this component is inside of the App component and it has inside the _Child_ component, it's just to show that doesn't matter how deep is our portal call it will send the Modal component to any specific DOM section.

2.- _Child_ component: this component is inside of the _Parent_ component and is the one that handle the state of showing modal, using `useState` this is just to control the current status of the modal (it's visible or not). 

3.- _Modal_ component: this component is the one that it's rendered into our Portal target (in this case the target it's the div with the id `id=modals` into the _public>index.html_ file ) 

When we want to have visible the modal, we will use a method inside of _ReactDOM_ called _ReactDOM.createPortal(p1, p2)_ this function receives two parameters the first parameter (p1) is a JSX Component (i.e. `<Modal>`), it's the component we want to move to other section of our DOM page, in this case our Modal component.

the second parameter (p2) is a DOM Element of the element that will receive this Modal and where we will render it, in this case is the div with the `id=modals` we defined in the _public>index.html_ file. 

so with this we will be moving this Modal component DOM up on the DOM tree.

_note:_ we can send props and callback props in our Modal component through the Portal.