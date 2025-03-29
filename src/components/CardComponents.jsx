import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export default function CardComponent() {
  return (
    <Card className="w-96 m-4 shadow-lg">
      <CardHeader className="bg-blue-500 text-white p-4">
        <Typography variant="h6">Card Title</Typography>
      </CardHeader>
      <CardBody>
        <Typography>Ini adalah contoh card menggunakan Material Tailwind.</Typography>
      </CardBody>
    </Card>
  );
}
