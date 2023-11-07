// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm } from '@formspree/react';
import Input from './Input';
import useGaEventsTracker from './useGaEventsTracker';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgeqgwll");
  const GAEventsTracker = useGaEventsTracker("Conversions");

  if (state.succeeded) {
      GAEventsTracker("clicked");
      return <h4 className="mt-0 mb-8">
       Thanks for joining.
        </h4>;
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <Input  id="email" type="email" name='email' label="Subscribe" labelHidden hasIcon="right" placeholder="Your email address">
          <button type='submit' className="button button-primary button-sm mr-0">
            Join!
          </button>
        </Input>
      </form>
  );
}
function FormSpree() {
  return (
    <ContactForm />
  );
}
export default FormSpree;
