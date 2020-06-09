export default async function UserApi(req, res) {
  const {
    query: { id },
  } = req;

  const user = await getUserById(id);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
}

function getUserById(id) {
  return new Promise(function (resolve) {
    const user = {
      id,
      name: 'Billy Blanks',
      username: 'bblanks',
      email: 'billy.blanks@msn.com',
    };
    setTimeout(resolve.bind(null, user), 1000);
  });
}
