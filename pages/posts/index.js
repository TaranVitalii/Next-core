import Link from "next/link";
import Text from "../../components/Text"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { posts: data },
    }
  };


  const Posts = ({ posts }) => { 
    return (
      <>
          <title>Posts</title>
        <Text text="Posts list:" />
        <ul>
          {posts && posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
    
export default Posts