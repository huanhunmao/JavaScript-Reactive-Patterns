<>
Redux 就是最典型的例子

One popular example of its usage is Redux.
 This popular state management library is based on this pattern (or more specifically, 
    the Flux architecture). Things work pretty simple in the context of Redux:

Publisher: The store acts as the publisher. When an action is dispatched, 
the store notifies all the subscribed components about the state change.


Subscriber: UI Components in the application are the subscribers. 
They subscribe to the Redux store and receive updates whenever the state changes.
</>