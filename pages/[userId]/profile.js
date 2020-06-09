import React from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const { userId } = router.query;

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/user/${userId}`);
      const user = await response.json();
      setUser(user);
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          Fetched user {user.name} with id {user.id}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
