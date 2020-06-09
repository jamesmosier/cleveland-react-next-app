import Link from 'next/link';

export default function Home({ users }) {
  return (
    <div>
      <div>
        <h4>Users:</h4>
        <ol>
          {users.map(user => (
            <li key={user.id}>
              <Link href="/[userId]/profile" as={`/${user.id}/profile`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.SUPER_SECRET_API_URL}/users`);
  const users = await response.json();

  return {
    // will be passed to the page component as props
    props: { users },
  };
}
