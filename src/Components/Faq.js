import React from 'react'
import Faq from 'react-faq-component'
import { Container, Jumbotron } from 'react-bootstrap'

const data = {
  title: 'FAQs municipal corporation',
  rows: [
    {
      title: 'How to search Death –Birth certificate online ?',
      content: `To search the certificate online go to RMC official website
      `,
    },
    {
      title:
        'How long it takes to make correction in a Birth/Death Certificate?',
      content: `Within a 15 days after submitting the application.`,
    },
    {
      title: 'How to get Birth and Death Certificate in English?',
      content: `It can be avail from the City Civic Centre run by AMC. From the available Gujarati
      data, English translation can be done.`,
    },
    {
      title: 'How to find Government Schemes based on user student or employee',
      content: `Choose Government Schemes through Sinibot then it provide links after search 
      variouse schemes and check eligibility criteria.`,
    },
    {
      title:
        'Is it compulsory for the professionals enumerated in Schedule 1 to get enrolled?',
      content: `Yes, A person already enrolled need not
      apply for enrolment again.
      `,
    },
    {
      title: 'What is the method of payment?',
      content: `Payment can be made at any City Civic
      Center by cash or a cheque/Demand Draft in
      Favor of "Municipal CommissionerAhmedabad" payable at Ahmedabad or
      ONLINE Payment.`,
    },
  ],
  title: 'FAQs municipal corporation',
  rows: [
    {
      title: 'How to search Death –Birth certificate online ?',
      content: `To search the certificate online go to RMC official website
      `,
    },
    {
      title:
        'How long it takes to make correction in a Birth/Death Certificate?',
      content: `Within a 15 days after submitting the application.`,
    },
    {
      title: 'How to get Birth and Death Certificate in English?',
      content: `It can be avail from the City Civic Centre run by AMC. From the available Gujarati
      data, English translation can be done.`,
    },
    {
      title: 'How to find Government Schemes based on user student or employee',
      content: `Choose Government Schemes through Sinibot then it provide links after search 
      variouse schemes and check eligibility criteria.`,
    },
    {
      title:
        'Is it compulsory for the professionals enumerated in Schedule 1 to get enrolled?',
      content: `Yes, A person already enrolled need not
      apply for enrolment again.
      `,
    },
    {
      title: 'What is the method of payment?',
      content: `Payment can be made at any City Civic
      Center by cash or a cheque/Demand Draft in
      Favor of "Municipal CommissionerAhmedabad" payable at Ahmedabad or
      ONLINE Payment.`,
    },
  ],
}

const styles = {
  bgColor: '#303030',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
}

const config = {
  animate: true,
  arrowIcon: 'v',
  // tabFocus: true,
}

const faq = () => {
  return (
    <Container>
      <Jumbotron>
        <Faq data={data} styles={styles} config={config} />
      </Jumbotron>
    </Container>
  )
}

export default faq
