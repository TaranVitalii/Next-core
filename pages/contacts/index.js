import Link from "next/link";
import Text from "../../components/Text"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { contacts: data },
    }
  };
  
const Contacts = ({ contacts }) => (
    <>
    <Text text="Contacts list:" />
    <Text tag="p" text="Contact description"/>
    <ul>
    {contacts && contacts.map(({ id, name, email }) => (
        <li key={id}><Link href={`/contacts/${id}`}>{name}</Link></li>
    ))}
    </ul>
    </>
)

export default Contacts