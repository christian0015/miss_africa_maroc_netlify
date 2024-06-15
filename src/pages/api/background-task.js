// api/background-task.js
export default async (req, res) => {
  if (req.method === 'POST') {
    // Start background task
    res.status(202).send('Task started');
    // Long running task code here
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
