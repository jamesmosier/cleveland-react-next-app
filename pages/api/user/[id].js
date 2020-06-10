import getUserById from '../../../lib/getUserById';

export default async function UserApi(req, res) {
  const {
    query: { id },
  } = req;

  const user = await getUserById(id);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
}
