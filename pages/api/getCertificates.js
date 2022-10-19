import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const client = await getDBClient();
  const collection = client.db().collection("certificates");
  const certificates = await collection.find().toArray();
  client.close();

  res.status(200).json({
    data: certificates.map((certificate) => ({
      id: certificate.id,
      name: certificate.name,
      description: certificate.description,
      year: certificate.year,
      month: certificate.month,
      day: certificate.date,
      issuer: certificate.issuer,
    })),
  });
}
