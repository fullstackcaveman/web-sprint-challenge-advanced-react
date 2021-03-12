# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components keep track of data that is being changed.
Stateless components use props that are sent to them for data.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount() is called before render()
componentWillUpdate() is invoked just before rendering when new props or state are being received.

3. Define stateful logic.
   Stateful logic is any code that uses state

4. What are the three step of creating a successful test? What is done in each phase?

Arrange: Setup component

Act: Get components and do something with them

Assert: Make sure the expected behavior is happening.
