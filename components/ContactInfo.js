import Text from "./Text";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Text tag="h3" text="Empty contact" />
  }

  return (
    <>
      <Text tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
}

export default ContactInfo;