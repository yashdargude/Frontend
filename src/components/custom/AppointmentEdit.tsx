import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface appointmentType {
  _id: number;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  reservationStatus: string;
}

interface AppointmentEditProps {
  appointment: appointmentType;
}

function AppointmentEdit({ appointment }: AppointmentEditProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between  gap-4 pt-6">
          <div className="flex items-center justify-between md:justify-normal gap-12 sm:gap-4 md:gap-8 lg:gap-16 2xl:gap-28">
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-darkblue opacity-50">
                Date
              </h2>
              <h5 className="text-sm font-semibold text-blue-700">
                {appointment.date}
              </h5>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-darkblue opacity-50">
                Start time
              </h2>
              <h5 className="text-sm font-semibold text-blue-700">
                {appointment.startTime}
              </h5>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-darkblue opacity-50">
                End time
              </h2>
              <h5 className="text-sm font-semibold text-blue-700">
                {appointment.endTime}
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-darkblue opacity-50">
                Reservation status
              </h2>
              <h5
                className={`text-sm font-semibold ${
                  appointment.reservationStatus !== "free"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {appointment.reservationStatus.toUpperCase()}
              </h5>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-darkblue opacity-50">
                Slot status
              </h2>
              <h5
                className={`text-sm font-semibold ${
                  appointment.status !== "active"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {appointment.status.toUpperCase()}
              </h5>
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-normal gap-6">
            <Button size="sm" className="w-32 md:w-24">
              Edit
            </Button>
            <Button size="sm" variant="destructive" className="w-32 md:w-24">
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AppointmentEdit;
