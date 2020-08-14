import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/contactForm"
import { act } from "react-dom/test-utils";




test('renders app', () => {
  render(<App/>)
})

// test('submit form', () => {
//     render(<ContactForm/>
//         )
//         const firstNameInput = screen.getByLabelText(/First Name/i)
//         const lastNameInput = screen.getByLabelText(/Last Name/i)
//         const emailInput = screen.getByLabelText(/Email/i)
//         const messageInput = screen.getByLabelText(/Message/i)
// test("submit form", () =>{
//     const {getByLabelText, getByTestId} = render(<ContactForm/>);
//     const firstNameInput = getByLabelText(/First Name*/i);
//     const lastNameInput = getByLabelText(/last name*/i);
//     const emailInput = getByLabelText(/email*/i)
//     const messageInput = getByLabelText(/message/i);
//   // etc
  
  
  
//   // fireEvent showing that it is executing correctly
  
//   act(() => {
//       fireEvent.change(firstNameInput, {
//           target:{name: 'firstName', value: 'Noh'}
//         })
//     })
    
//     act(() => {
//         fireEvent.change(lastNameInput, {
//             target: {name: 'lastName', value: 'Bibb'}
//         })
//     })
    
//     act(() => {
//         fireEvent.change(emailInput, {
//             target:{name:'email', value: 'noahbibb90@gmail.com'}
//         })
//     })
    
//     act(() => {
//         fireEvent.change(messageInput, {
//             target: {name: 'message', value: 'Its ya BOII'}
//         })
//     })
test("adds text to the form and submit", () =>{
  const {getByLabelText, getByTestId} = render(<ContactForm/>);

  const fNameInput = getByLabelText(/First Name*/i);
  const lNameInput = getByLabelText(/last name*/i);
  const emailInput = getByLabelText(/email*/i)
  const messageInput = getByLabelText(/message/i);
  
  
  fireEvent.change(fNameInput, {target: {value: "Steven"}})
  fireEvent.change(lNameInput, {target: {value: "Spencer"}})
  fireEvent.change(emailInput, {target: {value: "steve35spencer@gmail.com"}})
  fireEvent.change(messageInput, {target: {value: "This is my message"}})

  expect(fNameInput.value).toBe("Steven")
  expect(lNameInput.value).toBe("Spencer")
  expect(emailInput.value).toBe("steve35spencer@gmail.com")
  expect(messageInput.value).toBe("This is my message")

  fireEvent.click(getByTestId(/submit/i)) 
  
}) 
    
    
    // const submitButton = screen.getByTestId(/submit/i)
    // act(() => {
    //     fireEvent.click(submitButton)
    // })
    
    
    // screen.findByText(/Noah/i)
    // screen.findByText(/Bibb/i)
    // screen.findByText(/noahbibb90@gmail.com/i)
    // screen.findByText(/Its ya BOII/i)
    
    // })
    
// })