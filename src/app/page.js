import Banner from "@/components/Home/Banner";
import ExceptionalDentalCare from "@/components/Home/ExceptionalDentalCare";
import FindUs from "@/components/Home/FindUs";
import MakeAnAppointment from "@/components/Home/MakeAnAppointment";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <FindUs />
      <Services />
      <ExceptionalDentalCare />
      <MakeAnAppointment />
    </div>
  );
}
