export default function getUserById(id) {
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
