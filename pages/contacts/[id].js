import ContactInfo from "../../components/ContactInfo"

export const getServerSideProps = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contact: data },
  }
};


const Contact = ({ contact }) => (
    <ContactInfo contact={contact} />
  )
  
  export default Contact
  